import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: any = ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: any;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  a = new AudioContext();

  constructor(
    private snackBar: MatSnackBar, 
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      // this.hasDevices = true;
      this.availableDevices = devices;

      // selects the devices's back camera by default
      for (const device of devices) {
          if (/back|rear|environment/gi.test(device.label)) {
              this.scanner.changeDevice(device);
              this.currentDevice = device;
              break;
          }
      }
    });

    // you can observe if there's devices
    this.scanner.hasDevices.subscribe((x: boolean) => this.hasDevices = x);
    // or you can manually check if the component found them
    // this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((x: Result) => this.qrResult = x);
    this.scanner.permissionResponse.subscribe((x: boolean) => this.hasPermission = x);

  }


  displayCameras(cameras: MediaDeviceInfo[]) {
    // console.debug('Devices: ', cameras);
    this.availableDevices = cameras;
  }

  handleQrCodeResult(resultString: string) {
    // console.debug('Result: ', resultString);
    this.qrResultString = resultString;
    let obj = JSON.parse(this.qrResultString);
    this.snackBar.open(resultString, '', {duration: 5000});
    this.beep(100, 520, 200);
    this.router.navigate(["oficina/" + obj.cod_oficina]);
  }

  onDeviceSelectChange(selected: string) {
    // console.debug('Selection changed: ', selected);
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  stateToEmoji(state: boolean): string {

    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };

    return states['' + state];
  }

  beep(vol: number, freq: any, duration: number) {
    let v: any;
    let u: any;
    v = this.a.createOscillator();
    u = this.a.createGain();
    v.connect(u);
    v.frequency.value = freq;
    v.type = 'square';
    u.connect(this.a.destination);
    u.gain.value = vol * 0.01;
    v.start(this.a.currentTime);
    v.stop(this.a.currentTime + duration * 0.001);
  }

  


}

import { Component } from '@angular/core';
import { Platform, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'modal-content.html'
})
export class ModalContentPage {
    // public platform: Platform, public viewCtrl: ViewController
    constructor(public platform: Platform, public viewCtrl: ViewController) {}

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
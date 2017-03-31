import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
    @ViewChild('map') mapElement: ElementRef;
    map: any;

    constructor(public navCtrl: NavController) {}

    ionViewDidLoad(){
        this.loadMap();
    }

    addMarker(location, map) {
    /** Add the marker at the clicked location, and add the next-available label
        from the array of alphabetical characters.*/
      let marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    return marker;
    }

    loadMap(){
        let latLng = new google.maps.LatLng(42.052936, -87.679330);

        let marker = this.addMarker(latLng, this.map)
        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        marker.setMap(this.map);
    }

}

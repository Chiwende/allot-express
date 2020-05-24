import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  ngAfterViewInit() {
    this.mapIntializer();
  }

  @ViewChild('mapContainer', {static:false}) gmap: ElementRef

  map: google.maps.Map
  lat = 40.730610;
  lng = -73.935242;

  markers = [
    {
      position: new google.maps.LatLng(40.73061, 73.935242),
      map: this.map,
      title: "Marker 1"
    },
    {
      position: new google.maps.LatLng(32.06485, 34.763226),
      map: this.map,
      title: "Marker 2"
    }
  ];

  coordinates = new google.maps.LatLng(this.lat, this.lng)
  mapsOption: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12
  }

  maker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    // icon:
  })
  

  mapIntializer() {
    this.map = new google.maps.Map(
      this.gmap.nativeElement,
      this.mapsOption,
    )

    // this.maker.addListener("click", () => {
    //   const infoWindow = new google.maps.InfoWindow({
    //     content: this.maker.getTitle()
    //   });
    //   infoWindow.open(this.maker.getMap(), this.maker);
    // })
    // this.maker.setMap(this.map)


  }

  loadAllMarkers(){
    this.markers.forEach(markerInfo => {
      console.log(markerInfo)
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();


  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 12,
    center: latLng(-23.548103930191285, -46.63301467895508)    
  };

  layers: Marker<any>[] = []; 

  handleMapClick(event: LeafletMouseEvent){
    
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    console.log({lat, lng});
    this.layers = []
    this.layers.push(marker([lat, lng]));
    this.onSelectedLocation.emit({latitude : lat, longitude: lng})
    
  }
  
}

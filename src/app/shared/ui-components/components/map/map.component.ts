import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map: L.Map;
  private centroid: L.LatLngExpression = [42.3601, -71.0589]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: [52.37694, 4.84837],
      zoom: 16,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 16,
        minZoom: 10,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}

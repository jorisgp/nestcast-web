import { Component } from '@angular/core';
import * as L from 'leaflet';
import { PlatformService } from 'src/app/core/services/platform.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  private map: L.Map;
  private centroid: L.LatLngExpression = [42.3601, -71.0589]; //

  private _initMap(): void {
    if (this.platformService.isBrowser) {
      // this.map = L.map('map', {
      //   center: [52.37694, 4.84837],
      //   zoom: 16,
      // });
      // const tiles = L.tileLayer(
      //   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      //   {
      //     maxZoom: 16,
      //     minZoom: 10,
      //     attribution:
      //       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      //   }
      // );
      // tiles.addTo(this.map);
    }
  }

  constructor(private platformService: PlatformService) {}

  // ngAfterViewInit(): void {
  //   this.initMap();
  // }
}

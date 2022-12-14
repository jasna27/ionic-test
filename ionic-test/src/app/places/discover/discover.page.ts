import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: Place[];

  constructor(private placeService : PlacesService) { }

  ngOnInit() {
    this.places = this.placeService.places;
  }

}

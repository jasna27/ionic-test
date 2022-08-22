import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: Place[];

  constructor(
    private placeService: PlacesService,
    private menuController: MenuController
  ) {}

  ngOnInit() {
    this.places = this.placeService.places;
  }

  onOpenMenu() {
    this.menuController.open();
  }
}

import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places : Place[] = [
    {
      id: "1",
      title: 'Vajska',
      description:'Ima bas lepa provala tamo, jako mi nedostaje.',
      imageUrl: 'https://vojvodina.travel/media/2014/08/jezero-provala-vajska-9-1094x547.jpg',
      price: 2000
    },
    {
      id: "2",
      title: 'Hurgada',
      description:'Ima bas lepo more tamo. Jako mi nedostaje i hotel i hrana i moj drug Ajman.',
      imageUrl: 'http://salvadortravel.rs/wp-content/uploads/2019/03/egipat-letovanje-1.jpg',
      price: 200000
    },
    {
      id: "3",
      title: 'Lisabon',
      description:'Sanjala sma da sam tamo bila',
      imageUrl: 'https://www.skyline.co.rs/wp-content/uploads//2018/10/lisabon-2-1024x683.jpg',
      price: 20000
    }
  ];

  get places() {
    return [... this._places];
  }

  constructor() { }
}

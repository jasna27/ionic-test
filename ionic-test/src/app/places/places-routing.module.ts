import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tab',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: 'place-detail',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
          },
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule),
            pathMatch: 'full'
          },
          {
            path: 'new',
            loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
          },
          {
            path: 'edit',
            loadChildren: () => import('./offers/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
          },
          {
            path: ':placeId',
            loadChildren: () => import('./offers/place-bookings/place-bookings.module').then( m => m.PlaceBookingsPageModule)
          }
         
        ]
      },
      {
        path:'',
        redirectTo:'/places/tab/discover',
        pathMatch: 'full'
      }
    ]
  },
  
  {
    path: '',
    redirectTo: '/places/tab/discover',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { MapComponent } from './pages/map/map.component';
import { DeliveredComponent } from './pages/delivered/delivered.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { TransitComponent } from './pages/transit/transit.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { ParcelsComponent } from './pages/parcels/parcels.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { AddressBookComponent } from './pages/address-book/address-book.component';


const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'map', component: MapComponent },
  { path: 'delivered', component: DeliveredComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'transit', component: TransitComponent },
  { path: 'drivers', component: DriversComponent},
  { path: 'parcels', component: ParcelsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'address-book', component:AddressBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

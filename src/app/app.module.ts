import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavigationComponent } from './navigation/navigation.component';
import { AntdModule } from './modules/antd/antd.module';
import { MaterialModule } from './modules/material/material.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { MapComponent } from './pages/map/map.component';
import { DeliveredComponent } from './pages/delivered/delivered.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { TransitComponent } from './pages/transit/transit.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { ParcelsComponent } from './pages/parcels/parcels.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { EditParcelComponent } from './components/edit-parcel/edit-parcel.component';
import { ViewParcelComponent } from './components/view-parcel/view-parcel.component';
import { AddDriverFormComponent } from './components/add-driver-form/add-driver-form.component';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OverviewComponent,
    MapComponent,
    DeliveredComponent,
    RequestsComponent,
    TransitComponent,
    DriversComponent,
    ParcelsComponent,
    CustomersComponent,
    AddressBookComponent,
    AddParcelComponent,
    EditParcelComponent,
    ViewParcelComponent,
    AddDriverFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntdModule,
    MaterialModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

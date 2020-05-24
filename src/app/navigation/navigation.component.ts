import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  mode = true;
  dark = true;
  menus = [
    {
      level: 1,
      title: 'Overview',
      icon: 'dashboard',
      route: 'overview'
    },
    {
      level: 1,
      title: 'Map',
      icon: 'compass',
      route: 'map'
    },
    {
      level: 1,
      title: 'Deliveries',
      icon: 'dingding',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Delivered Items',
          icon: 'bars',
          route: 'delivered',
          open: false,
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Delivery Requests',
          icon: 'bars',
          route: 'requests',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'In Transit',
          icon: 'bars',
          route: 'transit',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Manage',
      icon: 'team',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Drivers',
          icon: 'user',
          route:'drivers',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Parcels',
          icon: 'user',
          route: 'parcels',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Customers',
          icon: 'user',
          route: 'customers',
          selected: false,
          disabled: false
        }
      ]
    }
  ];
}

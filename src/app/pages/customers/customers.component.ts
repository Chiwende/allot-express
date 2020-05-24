import { Component, OnInit } from '@angular/core';
import { ParentItemData, ChildrenItemData} from './../address-book/address-interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  
  listOfParentIndividualData: ParentItemData[] = [];
  listOfChildrenIndividualData: ChildrenItemData[] = [];
  listOfParentBusinessData: ParentItemData[] = [];
  listOfChildrenBusinessData: ChildrenItemData[] = [];

  ngOnInit(): void {
    // list of children data
    for (let i = 0; i < 3; ++i) {
      this.listOfParentIndividualData.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenIndividualData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }

    // Business Clients table data
    for (let i = 0; i < 3; ++i) {
      this.listOfParentBusinessData.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenBusinessData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }
  }

  constructor() { }



}

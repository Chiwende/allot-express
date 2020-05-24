import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.scss']
})
export class ParcelsComponent implements OnInit {
  validateForm: FormGroup;
  isEditParcelModalVisable = false;
  isViewParcelsModalVisable = false;
  isAddParcelsVisiable = false;
  isAddParcelLoading = false;
  inputValue: string;



  listOfDefaultedParcels = [
    {
      id: 1,
      name: 'Parcel Banda',
      trackingNumber: 'LSK1234',
      source: 'Destination',
      destination: 'source',
      category: 'PicknDrop',
      amount: 100,
      status: 'defaulted'
    }
  ]

  listOfDeliveredParcels = [
    {
      id: 1,
      name: 'Parcel Banda',
      trackingNumber: 'LSK1234',
      source: 'Destination',
      destination: 'source',
      category: 'PicknDrop',
      amount: 100,
      status: 'delivered'
    }
  ]
  listOfParcelsInTransit =[
    {
      id: 1,
      name: 'Parcel Mutale',
      trackingNumber: 'LSK1234',
      source: 'Destination',
      destination: 'source',
      category: 'PicknDrop',
      amount: 100,
      status: 'In Transit'
    }
  ]
  listOfDeliveryRequests = [
    {
      id: 1,
      name: 'Parcel Banda',
      trackingNumber: 'LSK1234',
      source: 'Destination',
      destination: 'source',
      category: 'PicknDrop',
      amount: 100,
      status: 'waiting picking'
    }
  ]
  listOfAllParcels = [
    {
      id: 1,
      name: 'Parcel Banda',
      trackingNumber: 'LSK1234',
      source: 'Destination',
      destination: 'source',
      category: 'PicknDrop',
      amount: 100,
      status: 'processing'
    }
  ]

  showViewParcelModal(): void {
    this.isViewParcelsModalVisable = true;
  }

  showEditParcelModal(): void {
    this.isEditParcelModalVisable = true;
  }

  showAddParcelModal(): void {
    this.isAddParcelsVisiable = true;
  }

  viewParcelModalOk(){
    console.log('Button ok clicked!');
    this.isViewParcelsModalVisable = false
  }

  viewParcelModalCancel(){
    console.log('Button cancel clicked!');
    this.isEditParcelModalVisable = false;
  }

  editParcelModalCancel(){
    console.log('Button cancel clicked!');
    this.isEditParcelModalVisable = false;
  }

  editParcelModalOk(){
    console.log('Button ok clicked!');
    this.isViewParcelsModalVisable = false
  }

  addParcelCancel(){
    console.log('Button cancel clicked!');
    this.isAddParcelsVisiable = false;
  }

  addParcelOk(){
    console.log('Button ok clicked!');
    // this.isAddParcelsVisiable = false;

    this.isAddParcelLoading = true;
    setTimeout(() => {
      this.isAddParcelsVisiable = false;
      this.isAddParcelLoading = false;
    }, 3000);
  }

  submitAddParcelForm(){

  }





  constructor() { }

  ngOnInit(): void {
  }
}


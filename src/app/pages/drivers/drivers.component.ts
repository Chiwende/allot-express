import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  isAddDriverModalVisiable = false;
  isViewDriverModalVisiable = false;
  isConfirmLoading = false;

  showAddDriveModal(){
    this.isAddDriverModalVisiable = true;
  }

  addDriverModalCancel(){
    this.isAddDriverModalVisiable= false;
  }

  addDriverModalOk(){
    this.isAddDriverModalVisiable = false;
    setTimeout(() => {
      this.isAddDriverModalVisiable = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  viewAddDriveModal(){
    this.isViewDriverModalVisiable = true;
  }

  viewDriverModalCancel(){
    this.isViewDriverModalVisiable= false;
  }

  viewDriverModalOk(){
    this.isViewDriverModalVisiable = false;
    setTimeout(() => {
      this.isViewDriverModalVisiable = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  listOfDriversData = [
    {
      name: 'Driverson',
      vehicleRegistration: 'ABP 1111',
      driverLocation: 'Lusaka',
      totalDeliveries: '10',
      status: 'Idle',
      badgeColor: 'default'
    }
  ]

  // constructor() { }
  constructor(private modalService: NzModalService) {}

  ngOnInit(): void {
  }

}

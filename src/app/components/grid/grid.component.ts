import { NgModule, Component, enableProdMode } from '@angular/core';

import { Service, Customer } from '../../services/grid.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers:[Service, Customer]
})
export class GridComponent 
 {
  customers: Customer[];

  constructor(service: Service) {
      this.customers = service.getCustomers();
  }

}

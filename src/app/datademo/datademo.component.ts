import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datademo',
  templateUrl: './datademo.component.html',
  styleUrls: ['./datademo.component.css']
})
export class DatademoComponent {

  private title = "Product Details";
  private product = {
    name: 'Sony TV',
    price: 35000.54,
    qty: 2,
    mfd: new Date('2019/02/20'),
    preview: 'assets/tv.jpg'
  };

  public getTotal() {
    return this.product.qty * this.product.price;
  }

}

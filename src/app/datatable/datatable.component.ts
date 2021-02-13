import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent{
  private products = [
    {pid:1 , name: "Sony TV", price: 45000},
    {pid:2 , name: "Nike Shoe", price:2055.47},
  ];

  private txtName;
  private txtPrice;
  private id = this.products.length;
  private confirmDelete;

  public AddProduct() {
    this.id++;
    this.products.push({ pid: this.id, name: this.txtName, price: this.txtPrice});
    alert('Recorded Inserted');
    this.txtName = '';
    this.txtPrice = '';
  }

  public DeleteProduct(index) {
    this.confirmDelete = confirm('Are you sure, want to delete?');
    if(this.confirmDelete = true) {
      this.products.splice(index, 1);
    }
  }
}

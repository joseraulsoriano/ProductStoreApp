import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Laptop Lenovo', price: 18999 },
    { id: 2, name: 'Smartphone Samnsung', price: 9999 },
    { id: 3, name: 'Monitor LG 24', price: 3999 },
    { id: 4, name: 'Teclado Mécanico Redragon', price: 1299 },
    { id: 5, name: 'Mouse Inalámbrico Logitech', price: 799 }
  ];
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule], // Importa los módulos necesarios
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Laptop Lenovo', price: 18999 },
    { id: 2, name: 'Smartphone Samsung', price: 9999 },
    { id: 3, name: 'Monitor LG 24', price: 3999 },
    { id: 4, name: 'Teclado Mecánico Redragon', price: 1299 },
    { id: 5, name: 'Mouse Inalámbrico Logitech', price: 799 }
  ];
}
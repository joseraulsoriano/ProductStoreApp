import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, MatButtonModule, RouterModule], // Importa los módulos necesarios
})
export class CartComponent {
    productosCarrito = [
    {
      titulo: 'Audifonos Bluetooth',
      imagen: 'assets/images/audifonos.jpg', // Ruta correcta
    },
    {
      titulo: 'Smartwatch Xiaomi',
      imagen: 'assets/images/smartwatch.jpg',
    },
    {
      titulo: 'Cámara Web HD',
      imagen: 'assets/images/camara.jpg',
    },
    {
      titulo: 'Disco Duro Externo',
      imagen: 'assets/images/disco-duro.jpg',
    },
    {
      titulo: 'Bocina Portátil',
      imagen: 'assets/images/bocina.jpg',
    },
  ];
}
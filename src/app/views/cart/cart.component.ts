import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productosCarrito = [
  {
    titulo: = 'Audifonos Bluetooth',
    imagen: = 'assets/images/audifonos.jpg',
  }, 
  {
    titulo: = 'Smartwatch Xioami',
    imagen: = 'assets/images/smartwatch.jpg',
  }, 

  {
    titulo: = 'Cámara Web HD',
    imagen: = 'assets/images/camara.jpg',
  }, 

  {
    titulo: = 'Disco Duro Externo',
    imagen: = 'assets/images/disco-duro.jpg',
  }, 
  {
    titulo: = 'Bocina Porátil',
    imagen: = 'assets/images/bocina.jpg',
  }
];
}

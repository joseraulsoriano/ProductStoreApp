import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  producto = {
    id: 2,
    name: 'Smartphone Samnsung',
    price: 9999,
    description: 'Un smartphone con pantalla AMOLED, cámara triple y bateria de larga duración.',
  };
  agregarAlCarrito() {
    alert('Producto agregado al carrito( ESTTO ES UNA SIMULACION)');

}
}

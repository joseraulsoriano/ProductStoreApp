import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule, RouterModule], // Importa MatCardModule
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  producto = {
    id: 2,
    name: 'Smartphone Samnsung',
    price: 9999,
    description: 'Un smartphone con pantalla AMOLED, cámara triple y bateria de larga duración.',
  };
  agregarAlCarrito() {
    alert('Producto agregado al carrito( ESTO ES UNA SIMULACION)');

}
}

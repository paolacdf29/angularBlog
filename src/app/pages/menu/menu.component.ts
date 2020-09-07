import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private productos: ProductosService) { }

  ngOnInit(): void {
    this.items = this.productos.getProductos();
  }

}

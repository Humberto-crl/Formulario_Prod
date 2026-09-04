import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
    providedIn: 'root'
})

export class ProductoService {
    guardarProducto(producto: Producto) {
        console.log(producto)
    }
}

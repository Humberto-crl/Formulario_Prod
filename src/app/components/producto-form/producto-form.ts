import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  selector: 'app-producto-form',
  styleUrl: './producto-form.css',
  templateUrl: './producto-form.html',
})

export class ProductoFormComponent {

  mensajeExito = false;

  productoForm!: FormGroup;

  constructor(
    private productoService: ProductoService
  ) {

    this.productoForm = new FormGroup({
    nombre: new FormControl("",[
      Validators.required,
      Validators.minLength(3)
    ]),
    descripcion: new FormControl("", [
      Validators.required,
      Validators.minLength(20)
    ]),
    precio: new FormControl("", [
      Validators.required,
      Validators.min(1)
    ]),
    categoria: new FormControl("", [
      Validators.required
    ]),
    stock: new FormControl("", [
      Validators.required,
      Validators.min(0)
    ])
  })
  }

  categorias = [
    'Electronica',
    'Hogar',
    'Ropa',
    'Alimentos',
    'Deportes'
  ];

  enviarProducto() {
    
    console.log("Boton Presionado")
    if (this.productoForm.invalid) {
      console.log("Formulario invalido")
      return;
    }

    const producto = this.productoForm.getRawValue();

    console.log(producto)

    this.productoService.guardarProducto(producto);

    this.mensajeExito = true;

    this.productoForm.reset();
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router
import { ProductoService } from '../../services/producto.service'; // Importar ProductoService
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  productoForm: FormGroup;
  titulo = 'Crear producto';

  constructor(
    private fb: FormBuilder,
    private router: Router, // Inyectar Router
    private productoService: ProductoService // Inyectar ProductoService
  ) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }
    
    this.productoService.guardarProducto(PRODUCTO).subscribe(
      data => {
        console.log('Producto creado:', data);
        this.router.navigate(['/']); 
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
}
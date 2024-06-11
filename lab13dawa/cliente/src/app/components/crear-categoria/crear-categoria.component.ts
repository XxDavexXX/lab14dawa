import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from "../../models/categoria";

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrl: './crear-categoria.component.css'
})
export class CrearCategoriaComponent {
  categoriaForm: FormGroup;
  titulo = 'Crear categoria';

  constructor(private fb: FormBuilder) {
    this.categoriaForm = this.fb.group({
      nom_categoria: ['', Validators.required],
      descripciön: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarCategoria() {
    const CATEGORIA: Categoria = {
      nom_categoria: this.categoriaForm.get("nom_categoria")?.value,
      descripciön: this.categoriaForm.get("descripciön")?.value
    }
    console.log(CATEGORIA);
  }
}


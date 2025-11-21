// src/app/home/home.page.ts

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { CommonModule } from '@angular/common'; // Necesario para pipes como number o directivas como *ngIf

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // Importamos los módulos aquí
})
export class HomePage {
  cantidadQuetzales: number | null = null;
  resultadoDolares: number | null = null;
  readonly TASA_CAMBIO = 8; // 8 Quetzales por Dólar según requerimiento

  constructor() {}

  convertir() {
    if (this.cantidadQuetzales && this.cantidadQuetzales > 0) {
      this.resultadoDolares = this.cantidadQuetzales / this.TASA_CAMBIO;
    } else {
      this.resultadoDolares = null;
    }
  }
}
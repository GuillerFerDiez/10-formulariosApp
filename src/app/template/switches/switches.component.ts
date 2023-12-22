import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})

export class SwitchesComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  get errores(): any {
    return this.miFormulario?.controls['terminosYcondiciones']?.errors
  }
  //agrego una propiedad llamada persona que tiene genero y notificaciones
  persona = {
    genero: 'F',  // genero:'' , no hay nada seleccionado por defecto
    notificaciones: true,
  }
  //agrego otra propiedad
  terminosYCondiciones: boolean = false;
}
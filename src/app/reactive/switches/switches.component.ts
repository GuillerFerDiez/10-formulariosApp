import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})

export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //es como poner el formulario con estos valores iniciales.
    this.miFormulario.reset({ ...this.persona, condiciones: true });

    this.miFormulario.valueChanges.subscribe(formu => {
      delete formu.condiciones;
      this.persona = formu;
      console.log(formu);
    })

    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(valor => {
    //   console.log(valor);
    // })
  }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.required]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones; //borro el campo condiciones
    console.log(formValue);
    this.persona = formValue;
  }

}
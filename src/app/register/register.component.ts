import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pantera } from '../models/Pantera';
import { MicroServicioPanteraService } from '../services/micro-servicio-pantera.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  materia: Pantera = new Pantera("4","hello", "world");

  _materiaService: MicroServicioPanteraService | undefined;
  
  constructor(_materiaService: MicroServicioPanteraService, private router: Router) {
    
    this._materiaService = _materiaService;
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(f: NgForm) {
    var _materia: Pantera  = new Pantera(f.value.id, f.value.nombre, f.value.contrasena);
    this.materia = _materia;
    this._materiaService?.addMateria(this.materia).subscribe();

    console.log(f.value);  // { first: '', last: '' }
    console.log(this.materia.id);
    console.log(this.materia.username);
    
  }

}

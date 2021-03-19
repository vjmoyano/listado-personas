import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Persona } from '../../persona.model';
import {LoggingService} from '../../loggingservice.service';
import { PersonasServices } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent implements OnInit {
  @Output() personaCreated = new EventEmitter<Persona>();
  nombreInput: string;
  apellidoInput: string;
  index:number;
  constructor(private personaService: PersonasServices, private router: Router, private route: ActivatedRoute){
      this.personaService.saludar.subscribe((indice:number)=>alert("El indice es: " + indice))

  }

  eliminarPersona(){
    this.personaService.eliminarP(this.index);
    this.router.navigate(['personas']);
  }


  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    if(this.index){
      this.personaService.modificarP(this.index, persona1);
      console.log("xd")

    }else
    {this.personaService.agregarPersona(persona1);
    }

    //this.router.navigate(['personas']);

  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if(this.index){
     let persona = this.personaService.encontrarP(this.index);
     this.nombreInput = persona.nombre;
     this.apellidoInput = persona.apellido;
    }
  }

}

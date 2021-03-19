import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import {Persona} from './persona.model'

@Injectable()
export class PersonasServices{
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(private data: DataServices){}

  ngOnInit(): void{

    this.getPers();
  }

  setPersonas(personas: Persona[]){
      this.personas = personas;
  }

  getPers(){

    return this.data.getpersonas();
  }

  agregarPersona(persona: Persona){
    if(this.personas  == null){
      this.personas = [];
    }
    this.personas.push(persona);
    this.data.guardarpersonas(this.personas);
  }

  encontrarP(index:number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarP(index:number, persona:Persona){
      let personac: Persona= this.personas[index];
      personac.nombre = persona.nombre;
      personac.apellido = persona.apellido;
      this.data.modifpersona(index,persona);
  }

  eliminarP(index: number) {
    this.personas.splice(index,1);
    this.data.elimpersona(index);
    //cargar el arreglo en la base de datos para
    this.modPers();

  }

  modPers(){
    if(this.personas!=null){
      this.data.guardarpersonas(this.personas);
    }
  }

}

import {HttpClient} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
  constructor(private http: HttpClient) {



  }
  //guardarpersonas
  guardarpersonas(personas: Persona[]){
    this.http.put('https://listado-personas-e4dd8-default-rtdb.firebaseio.com/datos.json',personas).subscribe(
      response => {
        console.log("Se guardaron las personas");
      },
      error=> console.log("error al guardar personas"+error)
    );

  }

  getpersonas(): Observable<any>{
  return  this.http.get<any>('https://listado-personas-e4dd8-default-rtdb.firebaseio.com/datos.json')

  }

  modifpersona(index:number, persona: Persona){
    let url: string
    url = 'https://listado-personas-e4dd8-default-rtdb.firebaseio.com/datos/'+ index + '.json';
    this.http.put(url, persona).subscribe(res=>{
      console.log("Se cambio la persona "+res);
      window.location.href="personas";
    },
    error=>console.log("error"));

  }

  elimpersona(index:number){
    let url: string
    url = 'https://listado-personas-e4dd8-default-rtdb.firebaseio.com/datos/'+ index + '.json';
    this.http.delete(url).subscribe(res=>{
      console.log("Se eliminó la persona "+res);
      window.location.href="personas";
    },
    error=>console.log("error en elminar"));
  }
}

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DataServices } from './data.services';
import * as firebase from 'firebase';


import {PersonasServices} from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasServices,DataServices]
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {





  }
  title = 'Listado Personas';




}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasServices } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService: PersonasServices, private router: Router){


  }
  ngOnInit(): void {

    this.personaService.getPers()
    .subscribe((persona: Persona[]) => {
        this.personas = persona;
        this.personaService.setPersonas(persona);
    })




  }

  agregar(){
      this.router.navigate(['personas/agregar']);
  }

}

import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes=[{path: '', component: PersonasComponent},
{path: 'personas', component: PersonasComponent},
{path: 'personas/agregar', component: FormularioComponent},
{path: 'personas/:id', component: FormularioComponent},
{path: 'login', component: LoginComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)

  ], exports: [RouterModule]
})
export class AppRoutingModule { }

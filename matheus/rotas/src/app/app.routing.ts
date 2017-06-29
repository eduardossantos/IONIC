import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { RotaNaoEncontradaComponent } from './rota-nao-encontrada/rota-nao-encontrada.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'nao-encontrado', component: RotaNaoEncontradaComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
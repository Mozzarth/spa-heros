import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:termino', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }



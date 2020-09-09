import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroesService, IHero } from 'src/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[]
  buscando: string
  hijoCardHero: EventEmitter<IHero>
  constructor(private serviceHero: HeroesService, private activeRoute: ActivatedRoute, private route: Router) {
    this.cargarHeroes()
  }
  cargarHeroes() {
    this.activeRoute.params.subscribe(parametro => {
      this.buscando = parametro.termino
      console.log(this.buscando)
      this.heroes = this.serviceHero
        .getHeroes()
        .filter(heroe => heroe.nombre.toLowerCase().indexOf(this.buscando || "".toLowerCase() || "") >= 0)
    })
  }

  heroeSeleccionado(heroe: IHero) {
    this.route.navigate(["/hero", heroe.id])

  }
  ngOnInit(): void {

  }


}

import { Component, OnInit } from '@angular/core';
import { IHero, HeroesService } from 'src/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {
  hero: IHero
  relationHero: IHero[]
  constructor(private route: ActivatedRoute, private heroService: HeroesService, private router: Router) {
    this.route.params.subscribe(obser => {
      this.hero = this.heroService.getHeroById(obser.id)
      this.relationHero = this.heroService
        .getHeroesByCasa(this.hero.casa)
        .filter(heroe => heroe.id !== this.hero.id)
    })
  }

  ngOnInit(): void {
  }

  heroeSeleccionado(heroe: IHero) {
    this.router.navigate(["/hero", heroe.id])

  }

}

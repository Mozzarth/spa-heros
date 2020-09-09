import { IHero, HeroesService } from 'src/services/heroes.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { registerLocaleData } from '@angular/common'
import localeCO from '@angular/common/locales/es-CO'
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {
  @Input("otroNameHero") hero: IHero
  @Output("heroeSeleccionado") seleccion: EventEmitter<IHero>
  constructor(private ruta: Router) {
    this.seleccion = new EventEmitter()
    registerLocaleData(localeCO, "es-co")
  }
  irHeroe() {
    this.seleccion.emit(this.hero)
    // this.ruta.navigate(["/hero", this.hero.id])
  }
  ngOnInit(): void {
  }
}

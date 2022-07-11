import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { POKEMONS } from 'src/app/pokemons';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Output() pokemonsEmitter = new EventEmitter();
  pokemons = POKEMONS;

  constructor() {}

  ngOnInit(): void {}

  EmitData() {
    this.pokemonsEmitter.emit(this.pokemons);
  }
}

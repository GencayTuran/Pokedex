import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Output() pokemonsEmitter = new EventEmitter();
  pokemons: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.pokemonsDataList.subscribe((data) => {
      this.pokemons = data;
    });
  }

  EmitData() {
    this.pokemonsEmitter.emit(this.pokemons);
  }
}

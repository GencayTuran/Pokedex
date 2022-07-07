import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../pokemons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faFilter = faFilter;
  pokemons = POKEMONS;

  constructor() {}

  ngOnInit(): void {}
}

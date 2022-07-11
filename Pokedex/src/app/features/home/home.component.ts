import { Component, Input, OnInit } from '@angular/core';
import { POKEMONS } from '../../pokemons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { HomeSortMenuComponent } from '../home-sort-menu/home-sort-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: any;
  faFilter = faFilter;

  constructor(private matBottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    let bottomSheet = this.matBottomSheet.open(HomeSortMenuComponent, {
      hasBackdrop: true,
      data: 'test',
    });
  }
  receivePokemons($event: any) {
    this.pokemons = $event;
  }

  //after clicking sort option, dismiss sheet and trigger selected function.

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
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
  faFilter = faFilter;
  pokemons = POKEMONS;

  constructor(private matBottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    let bottomSheet = this.matBottomSheet.open(HomeSortMenuComponent, {
      hasBackdrop: true,
      data: 'test',
    });
  }
  //after clicking sort option, dismiss sheet and trigger selected function.

  ngOnInit(): void {}
}

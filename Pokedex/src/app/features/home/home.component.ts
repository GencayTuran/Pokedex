import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { HomeSortMenuComponent } from '../home-sort-menu/home-sort-menu.component';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: any;
  faFilter = faFilter;

  isSmall: boolean;
  isXSmall: boolean;
  isMobile: boolean;

  constructor(
    private matBottomSheet: MatBottomSheet,
    private responsiveService: ResponsiveService
  ) {
    // responsiveService Subscriptions
    this.responsiveService.SmallChanged.subscribe((isSmall) => {
      this.isSmall = isSmall;
    });
    this.responsiveService.XSmallChanged.subscribe((isXSmall) => {
      this.isXSmall = isXSmall;
    });
    this.responsiveService.viewMobileChanged.subscribe((mobileView) => {
      this.isMobile = mobileView;
    });
  }

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

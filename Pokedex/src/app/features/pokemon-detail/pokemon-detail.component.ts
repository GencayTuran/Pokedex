import { Component, Input, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemons: any;

  isSmall: boolean;
  isXSmall: boolean;
  isMobile: boolean;

  constructor(private responsiveService: ResponsiveService) {
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

  ngOnInit(): void {}

  receivePokemons($event: any) {
    this.pokemons = $event;
  }
}

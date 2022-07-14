import { Component, Input, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { DataService } from 'src/app/services/data.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemons: any;
  detailPokemon: any = [];
  detailPokemon_species: any = [];

  isSmall: boolean;
  isXSmall: boolean;
  isMobile: boolean;

  constructor(
    private responsiveService: ResponsiveService,
    private dataService: DataService,
    private postService: PostService
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

  ngOnInit(): void {
    this.dataService.pokemonsDataDetail.subscribe((data) => {
      this.detailPokemon = data;
      this.postService
        .getPost(this.detailPokemon.species.url)
        .subscribe((response) => {
          this.detailPokemon_species = response;
        });
      console.log(this.detailPokemon);
    });
  }

  receivePokemons($event: any) {
    this.pokemons = $event;
  }
}

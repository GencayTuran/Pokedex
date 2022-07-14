import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PokemonDetailComponent } from './features/pokemon-detail/pokemon-detail.component';
import { DataService } from './services/data.service';

var id;
var routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pokemon-detail/1', component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes = routes;
  pokemons: any;
  constructor(private dataService: DataService) {
    this.addRoutes();
  }
  addRoutes() {
    this.dataService.pokemonsDataList.subscribe((data) => {
      this.pokemons = data;

      for (let index = 0; index < this.pokemons.length; index++) {
        this.routes.push({
          path: `pokemon-detail/${this.pokemons[index].id}`,
          component: PokemonDetailComponent,
        });
      }
      console.log(routes);
    });
  }
}

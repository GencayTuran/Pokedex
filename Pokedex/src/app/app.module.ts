import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HomeSortMenuComponent } from './features/home-sort-menu/home-sort-menu.component';
import { PokemonDetailComponent } from './features/pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './shared/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HomeSortMenuComponent, PokemonDetailComponent, PokemonCardComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

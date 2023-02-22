import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonViewComponent } from './pages/pokemon-view/pokemon-view.component';
import { NewPokemonComponent } from './pages/new-pokemon/new-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonViewComponent,
    NewPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

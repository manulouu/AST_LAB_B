import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonViewComponent } from './pages/pokemon-view/pokemon-view.component';
import { NewPokemonComponent } from './pages/new-pokemon/new-pokemon.component';
const routes: Routes = [
  {path: '' , component: PokemonViewComponent} ,
  {path: 'pokemon' , component: PokemonViewComponent} ,

  {path: 'new-pokemon', component: NewPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

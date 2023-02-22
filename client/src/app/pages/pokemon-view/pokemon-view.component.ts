import { Component, OnInit } from '@angular/core';
import { ObjectId } from 'mongoose';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit{

pokemons: Pokemon[] = [];

constructor(private pokemonService: PokemonService) {}

ngOnInit() {
  this.pokemonService.getPokemons()
  .subscribe((pokemons: any)=> this.pokemons = pokemons);
}
deletePokemon( pokemon : Pokemon) {
  this.pokemonService.deletePokemon(pokemon._id).subscribe(()=>  { this.ngOnInit() });
}

}

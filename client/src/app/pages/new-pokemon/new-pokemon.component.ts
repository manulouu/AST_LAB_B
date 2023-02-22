import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ObjectId } from 'mongoose';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.css']
})
export class NewPokemonComponent implements OnInit{

  constructor(private pokemonService : PokemonService, private router: Router){}
 
  ngOnInit() {

  }
  addPokemon(nombre: string , numero: number, generacion: number ,region: string ,tipo:string ,evolucion: number,legendario : boolean,cantidad : number, precio: number) {
    this.pokemonService.createPokemon(nombre,numero,generacion,region , tipo, evolucion, legendario,cantidad,precio)
    .subscribe((pokemon: any)=> this.router.navigate(['/' ]) );
  }
  
    
   getBoolean(value: string){
    switch(value){
      case "true":
        return true;
       default:
          return false;
    }

  }
}

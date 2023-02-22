import { Injectable } from '@angular/core';
import { response } from 'express';
import { ObjectId } from 'mongoose';
import { map } from 'rxjs';
import Pokemon from './models/pokemon';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private webService: WebService) { }

  getPokemons(){
    return this.webService.get('api/pokemon'); 
  }
  createPokemon(nombre: string , numero: number,generacion: number ,region: string ,tipo:string ,evolucion: number,legendario : boolean,cantidad : number, precio: number) {

    return this.webService.post('api/pokemon',{nombre,numero,generacion,region , tipo, evolucion, legendario, cantidad,precio})
  }
  deletePokemon(_id :string ) {
    return this.webService.delete(`api/pokemon/${_id}`);
  }
}

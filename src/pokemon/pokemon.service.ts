import { Injectable } from "@nestjs/common";

import { Pokemon } from "./pokemon.model"

import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";

@Injectable()
export class PokemonService {
    //pokemon: Pokemon[] = [];
constructor(@InjectModel('Pokemon') private pokemonModel:Model<Pokemon>){

}
    async getSeason1Length(){
        const result =  await this.pokemonModel.find();
        return result.length
        // return result.data
        //console.log(result)
        
    }

    async getAllPokemon(){
        return await this.pokemonModel.find()
        
    }

    async getSinglePokemon(pokemonName:string) {
        console.log(pokemonName)
        return await this.pokemonModel.findOne({name:pokemonName})
    }
}
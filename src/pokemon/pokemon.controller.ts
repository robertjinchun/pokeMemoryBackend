import { Controller, Get, Param } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";

@Controller('pokemon')
export class PokemonController{
    constructor(public pokemonService: PokemonService){}
    
    @Get('total')
    getSeason1Length(){
        return this.pokemonService.getSeason1Length()
    }

    @Get('cheat')
    getAllPokemon(){
        this.pokemonService.getAllPokemon()
    }

    @Get(':pokemonName')
    getSinglePokemon(@Param('pokemonName')pokemonName:string):any{
        return this.pokemonService.getSinglePokemon(pokemonName)
    }

}
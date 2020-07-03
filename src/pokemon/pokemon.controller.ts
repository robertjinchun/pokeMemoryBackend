import { Controller, Get } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";

@Controller('pokemon')
export class PokemonController{
    constructor(public pokemonService: PokemonService){}

    @Get()
    getSinglePokemon():any{

    }

}
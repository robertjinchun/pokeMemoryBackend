import * as mongoose from 'mongoose';

export const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true},
    number: { type: Number, required: true},
});

export class Pokemon {

    constructor(public name:string, public number:number){

    };

}
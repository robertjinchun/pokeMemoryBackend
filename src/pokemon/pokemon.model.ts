import * as mongoose from 'mongoose';

export const PokemonSchema = new mongoose.Schema({
    name: { type: String, required: true},
    number: { type: Number, required: true},
}, {collection: 'season1'});

export interface Pokemon extends mongoose.Document {

    id:string;
    name: string;
    number: number;
}
import { Word } from "../database/models/word";
import { AddWordDto } from "../interfaces/words";

export async function GetWordsService() {
    return await Word.find();
}

export async function AddWordService(word: AddWordDto) {
    return await new Word(word).save();
}
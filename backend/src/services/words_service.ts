import { Word } from "../database/models/word";
import { AddWordDto } from "../interfaces/words";

export async function getWords() {
    return await Word.find();
}

export async function addWord(word: AddWordDto) {
    return await new Word(word).save();
}
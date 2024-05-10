import { Word } from "../database/models/word";
import { AddWordDto } from "../interfaces/words";

export async function GetWordsService() {
    return await Word.find();
}

export async function AddWordService(input: AddWordDto) {
    const newWord = new Word(input);
    const saveWord = await newWord.save();
    return saveWord;
}
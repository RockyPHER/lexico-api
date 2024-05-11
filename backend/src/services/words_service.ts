import { Word } from "../database/models/word";
import { AddWordDto } from "../interfaces/words";

export async function GetWord(name: string) {
    return await Word.find().byName(name);
}

export async function GetWords() {
    return await Word.find();
}

export async function AddWord(input: AddWordDto) {
    const newWord = new Word(input);
    const saveWord = await newWord.save();
    return saveWord;
}
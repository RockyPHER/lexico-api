import { Word } from "../database/models/word";
import { AddWordDto } from "../interfaces/words";

export async function GetWord(name: String) {
    return await Word.find({}, 'name').byName(name);
}

export async function GetWords() {
    return await Word.find({}, 'name').exec();
}

export async function AddWord(input: AddWordDto) {
    const newWord = new Word(input);
    const saveWord = await newWord.save();
    return saveWord;
}

export async function DeleteWord(id: String) {
    return await Word.findByIdAndDelete(id);
}

export async function UpdateWord(id: String, word: AddWordDto) {
    return await Word.findByIdAndUpdate(id, word);
}
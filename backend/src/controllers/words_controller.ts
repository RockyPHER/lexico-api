import { Request, Response } from "express";
import { AddWord, DeleteWord, GetWord, GetWords, UpdateWord } from "../services/words_service";


export async function GetWordController(req: Request, res: Response) {
    const name = req.params.id;
    console.log(name);
    const words = await GetWord(name);
    res.json(words);
}

export async function GetWordsController(req: Request, res: Response) {
    const words = await GetWords();
    try {
        if (!words) {
            throw new Error("No input provided")
        }

        res.json(words);
    } catch (err) {
        console.error(err);
    }
}

export async function AddWordController(req: Request, res: Response) {
    const input = req.body;
    const word = await AddWord(input);
    res.json(word);
}

export async function DeleteWordController(req: Request, res: Response) {
    const id = req.params.id;
    const word = await DeleteWord(id);
    res.json(word);
}

export async function UpdateWordController(req: Request, res: Response) {
    const id = req.params.id;
    const newWord = req.body;
    const word = await UpdateWord(id, newWord);
    res.json(word);
}
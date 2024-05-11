import { Request, Response } from "express";
import { AddWord, GetWord, GetWords } from "../services/words_service";


export async function GetWordController(req: Request, res: Response) {
    const { name } = req.params;
    const words = await GetWord(name);
    res.json(words);
}

export async function GetWordsController(req: Request, res: Response) {
    const words = await GetWords();
    res.json(words);
}

export async function AddWordController(req: Request, res: Response) {
    const input = req.body;
    const word = await AddWord(input);
    res.json(word);
}
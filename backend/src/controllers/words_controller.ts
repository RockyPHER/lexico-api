import { Request, Response } from "express";
import { AddWord, DeleteWord, GetWord, GetWords, UpdateWord } from "../services/words_service";


export async function GetWordController(req: Request, res: Response) {
    try {
        const name = req.params.name;
        if (name === "" || name === null) throw new Error("InvalidWordInput");

        const word = await GetWord(name);
        if (word === null) throw new Error("WordNotFound");

        res.status(201).json(word);
    } catch (err: any) {
        if (err.message === "InvalidWordInput") return res.status(400).json(err);
        if (err.message === "WordNotFound") return res.status(404).json(err);

        return res.status(500).json(err);
    }
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
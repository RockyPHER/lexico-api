import { Request, Response } from "express";
import { AddWordService, GetWordsService } from "../services/words_service";

export async function GetWords(res: Response, req: Request) {
    const words = await GetWordsService();
    res.json(words);
}

export async function AddWord(res: Response, req: Request) {
    console.log("new word add");
    const { name, class, syllables } = req.body;
    const word = await AddWordService({ name, class, syllables });
}
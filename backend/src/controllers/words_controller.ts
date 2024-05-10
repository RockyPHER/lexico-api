import { Request, Response } from "express";
import { AddWordService, GetWordsService } from "../services/words_service";

export async function GetWords(res: Response, req: Request) {
    const words = await GetWordsService();
    res.json(words);
}

export async function AddWord(res: Response, req: Request) {
    const content = req.body;
    const word = await AddWordService(content);
    res.json(word);
}
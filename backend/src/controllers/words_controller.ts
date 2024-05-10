import { Request, Response } from "express";
import { AddWordService, GetWordsService } from "../services/words_service";

export async function GetWords(req: Request, res: Response) {
    const words = await GetWordsService();
    res.json(words);
}

export async function AddWord(req: Request, res: Response) {
    const input = req.body;
    const word = await AddWordService(input);
    res.json(word);
}
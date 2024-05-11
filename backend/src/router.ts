import { Router } from "express";
import { AddWordController, GetWordController, GetWordsController } from "./controllers/words_controller";

const router = Router();

router.get("/words", GetWordsController);
router.get("/words/:id", GetWordController);
router.post("/words", AddWordController);


export { router };
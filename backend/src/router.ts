import { Router } from "express";
import { AddWord, GetWords } from "./controllers/words_controller";

const router = Router();

// router.get("/words/:id", getWord);
router.get("/words", GetWords);
router.post("/words", AddWord);
// router.delete("/words/:id", deleteWord);
// router.patch("/words/:id", updateWord);

export { router };
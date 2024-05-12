import { Router } from "express";
import { AddWordController, DeleteWordController, GetWordController, GetWordsController, UpdateWordController } from "./controllers/words_controller";

const router = Router();

router.get("/words", GetWordsController);
router.get("/words/:id", GetWordController);
router.post("/words", AddWordController);
router.delete("/words/:id", DeleteWordController);
router.patch("/words/:id", UpdateWordController);

export { router };
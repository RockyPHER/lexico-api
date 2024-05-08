import { Router } from "express";

const router = Router();

router.get("/words/:id", getWord);
router.get("/words", getWords);
router.post("/words", createWord);
router.delete("/words/:id", deleteWord);
router.patch("/words/:id", updateWord);

export { router };
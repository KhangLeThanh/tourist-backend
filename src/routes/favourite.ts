import { Router } from "express";

import {
  getFavourite,
  addFavourite,
  removeFavourite,
} from "../controllers/favouriteController";

const router = Router();

router.post("/", addFavourite);
router.get("/", getFavourite);
router.delete("/:id", removeFavourite);

export default router;

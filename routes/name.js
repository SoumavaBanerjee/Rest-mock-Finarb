import express from "express";
import {
  addNewName,
  getAllNames,
  putName,
  deleteNamebyId,
} from "../controllers/name.js";

const router = express.Router();

router.get("/", getAllNames);
router.post("/", addNewName);
router.put("/", putName);
router.delete("/", deleteNamebyId);

export { router as nameRouter };

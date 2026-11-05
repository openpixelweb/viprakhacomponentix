import { Router } from "express";
import multer from "multer";
import { submitCareerApplication } from "../controllers/career.controller.js";

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/career-apply", upload.single("resume"), submitCareerApplication);

export default router;

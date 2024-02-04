import express from "express";
import reportController from "../controller/ReportController.mjs";
const router = express.Router();

router.post("/generate", reportController.createReport);

export default router;

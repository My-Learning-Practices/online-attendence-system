import { Router } from "express";
import * as section from "./section";

const router = Router();

router.get("/listAll", section.listAllSections);
router.post("/add", section.addSection);
router.put("/update:id", section.updateSection);
router.get("/:name", section.findSection);

export default router;

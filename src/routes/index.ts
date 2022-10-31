import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).send("Hello there... Have a wonderful day!");
});

export default router;

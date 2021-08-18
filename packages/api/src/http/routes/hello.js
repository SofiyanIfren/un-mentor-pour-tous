import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

export default router;

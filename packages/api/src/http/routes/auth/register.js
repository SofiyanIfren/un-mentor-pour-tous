import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Register Endpoint");
});

export default router;

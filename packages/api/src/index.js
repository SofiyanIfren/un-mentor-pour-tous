import express from "express";
import { registerRoutes } from "./structures/registry";
const app = express();

(async () => {
  await registerRoutes(app);
})();

app.listen(8080, () => {
  console.log("server running on port 8080");
});

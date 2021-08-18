import { promises as fs } from "fs";
import path from "path";

export const registerRoutes = async (
  app,
  dir = path.join(path.dirname(__dirname), "http", "routes"),
  routePath = [],
) => {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const stat = await fs.lstat(path.join(dir, file));

    if (stat.isDirectory()) {
      registerRoutes(app, path.join(dir, file), [...routePath, file]);
    }

    if (file.endsWith(".js")) {
      const { default: route } = await import(path.join(dir, file));

      const finalPath =
        file === "index.js"
          ? `/${routePath.join("/")}`
          : `/${[...routePath, file.split(".")[0]].join("/")}`;

      app.use(finalPath, route);
    }
  }
};

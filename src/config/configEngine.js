import express from "express";
import path from "path";

const configViewEngine = (app) => {
  const viewsPath = path.join(process.cwd(), "src", "views");
  console.log("Views Directory:", viewsPath); // Debugging log
  app.use(express.static(path.join(process.cwd(), "src", "public")));
  app.set("view engine", "ejs");
  app.set("views", viewsPath);
};

export default configViewEngine;

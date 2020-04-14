import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Welcome to my portfolio" });
});

export default routes;

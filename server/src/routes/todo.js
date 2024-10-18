import { Router } from "express";
import { getTodos } from "../controllers/todo.js";

const route = Router();

route.get("/", getTodos);

export default route;

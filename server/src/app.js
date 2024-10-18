import express, { json } from "express";
import cors from "cors";
import todoRoute from "./routes/todo.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ msg: "It is working" });
});

app.use("/todo", todoRoute);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

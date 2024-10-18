import db from "../utils/db-connect.js";

// export async function getTodos(req, res) {
//   res.json({ title: "Title", desc: "Desc" });
// }

export async function getTodos(req, res) {
  // const todos = await db.select("*").from("todo")
  const todos = await db("todo");

  res.json(todos);
}

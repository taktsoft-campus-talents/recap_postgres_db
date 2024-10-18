import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch("http://localhost:3000/");

      if (!response.ok) {
        console.log("There is a problem by response");
      } else {
        const data = await response.json();
        console.log(data);
      }
    }

    getTodos();
  }, []);

  return (
    <>
      <div>Hello</div>
    </>
  );
}

export default App;

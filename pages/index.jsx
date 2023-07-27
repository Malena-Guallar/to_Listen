"use client";
import { useEffect, useState } from "react";
import { Yeseva_One } from "@next/font/google";

const yeseva = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-yeseva"
})


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addToList = (e) => {
    e.preventDefault();
    if (!input){
      return;
    } else {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput("");
    };
  };
  const deleteFromList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const markChecked = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done} : todo))
    );
  };
  return (
    <main className={`${yeseva.variable} text-orange-400 font-yeseva`}>
      <h1>To Listen App</h1>
      <form onSubmit={addToList}>
        <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add something to listen" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
            <li key={todo.id} class={todo.done ? "text-green-300" : ""}>
            <span onClick={() => markChecked(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteFromList(todo.id)}>. . .delete</button>
            </li>
        ))}
      </ul>
    </main>
  )
};
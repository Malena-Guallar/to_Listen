"use client";
import { useEffect, useState } from "react";
import { Yeseva_One, Italiana, Quicksand } from "@next/font/google";

const yeseva = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: ['400']
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
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
    <main class="w-screen h-screen bg-cream">
      <h1 class={`${italiana.className} flex text-3xl p-10 place-content-center`}> to Listen .</h1>
      <form onSubmit={addToList} class={`${quicksand.className} text-yellow p-5 bg-blue m-5`}>
        <input 
            class="bg-transparent"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add something to listen" />
        <button type="submit" class="font-medium">Add</button>
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

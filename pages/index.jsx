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
    <main id="app_container" class={`${quicksand.className} w-screen h-screen bg-cream`}>
      <h1 id="header" class={`${italiana.className} flex text-3xl p-10 place-content-center`}> to Listen .</h1>
      <div id="form_container" class="flex flex-row ml-5">
        <p id="blue_square" class="bg-blue p-5 text-blue" >a</p>
        <form id="form" onSubmit={addToList} class="flex items-center ml-5">
        <input 
            id="input"
            class="flex-row bg-transparent content-center py-4 italic font-light"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add something to listen" />
        <button type="submit" class="font-semibold pl-3 text-blue">add</button>
        </form>
      </div>
      <br></br>
      <div id="list_container" class="flex flex-row ml-5">
        <p id="coral_square" class="bg-coral p-5 text-coral" >a</p>
        <ul id="list_of_items"
            class="flex items-center ml-5">
            {todos.map((todo) => (
              <li key={todo.id} 
                  class={`${todo.done ? "text-green-300" : ""}`}>
              <span onClick={() => markChecked(todo.id)}>{todo.text}</span>
              <button onClick={() => deleteFromList(todo.id)}
                      class="pl-40 text-coral font-semibold">
                      delete</button>
              </li>
            ))}
        </ul>
      </div>
    </main>
  )
};

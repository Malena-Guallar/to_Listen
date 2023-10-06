"use client";
import React, { useEffect } from "react";
import { Italiana, Quicksand } from "@next/font/google";
import AddToList from "./Components/AddToList";
import CheckedItem from "./Components/CheckedItem";
import TodoItem from "./Components/TodoItem";
import { useSelector } from "react-redux";
import { store } from "../Redux/store";
import { fetchTodos } from "../Redux/List.slice";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Pb à régler -> les items marqués "checked" s'affichent toujours dans la première liste.

export default function Home() {
  useEffect(() => {
    store.dispatch(fetchTodos);
  }, []);

  const todos = useSelector((state) => state.list.todos);
  const markedTodos = useSelector((state) => state.list.markedTodos);

  return (
    <>
      <main
        id="app_container"
        className={`${quicksand.className} w-screen h-screen bg-cream`}
      >
        <h1
          id="header"
          className={`${italiana.className} font-family-italiana flex text-3xl p-10 place-content-center`}
        >
          to Listen .
        </h1>
        <AddToList />
        <br></br>
        <div id="list_container" className="flex ml-5 justify-start">
          <ul id="list_of_items" className="flex flex-col w-full">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
        <div>
          <ul
            id="list_of_marked_items"
            className="flex flex-col w-full text-black"
          >
            {markedTodos.map((todo) => (
              <CheckedItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import { Yeseva_One, Italiana, Quicksand } from "@next/font/google";
import AddToList from "./Components/AddToList";
import ItemFromList from "./Components/ItemFromList";
import ItemFromCheckedList from "./Components/ItemFromCheckedList"

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

import clientPromise from '../lib/mongodb'

export const getServerSideProps = async () => {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    console.log("Connected to MongoDB !");
    return {
      props: { isConnected: true },
    }
  }
  catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

// Pb à régler -> les items marqués "checked" s'affichent toujours dans la première liste.

export default function Home() {

  const [todos, setTodos] = useState([]);
  const [markedTodos, setMarkedTodos] = useState([]);

  const deleteFromList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setMarkedTodos(markedTodos.filter((todo) => todo.id !== id));
  };

  const markChecked = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: true } : todo
    );

    const checkedTodo = updatedTodos.find((todo) => todo.id === id);

    setTodos(updatedTodos);
    setMarkedTodos([...markedTodos, checkedTodo]);
  };

  return (
    <>
      <main id="app_container" className={`${quicksand.className} w-screen h-screen bg-cream`}>
        <h1 id="header" className={`${italiana.className} flex text-3xl p-10 place-content-center`}> to Listen .</h1>
        <AddToList todos={todos} setTodos={setTodos}/>
        <br></br>
        <div id="list_container" className="flex ml-5 justify-start">
            <ul id="list_of_items"
            className="flex flex-col w-full">
              {todos.map((todo) => (
                  <ItemFromList 
                    key={todo.id}
                    todo={todo}
                    markChecked={markChecked}
                  />
                  ))}
            </ul>
        </div>
        <div>
          <ul id="list_of_marked_items"
          className="flex flex-col w-full text-black">
            {markedTodos.map((todo) => (
              <ItemFromCheckedList 
                key={todo.id}
                todo={todo}
                deleteFromList={deleteFromList}/>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
};

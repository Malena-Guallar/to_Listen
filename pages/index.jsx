"use client";
import React from "react";
import { Yeseva_One, Italiana, Quicksand } from "@next/font/google";
import AddToList from "./Components/AddToList";
import TodoItem from "./Components/TodoItem";
import ItemFromCheckedList from "./Components/CheckedItem"
import { useSelector, useDispatch } from "react-redux";
import { markChecked, deleteFromList } from "../Redux/List.slice";


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
import CheckedItem from "./Components/CheckedItem";

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

  const todos = useSelector((state) => state.list.todos);
  const markedTodos = useSelector((state) => state.list.markedTodos);


  return (
    <>
      <main id="app_container" className={`${quicksand.className} w-screen h-screen bg-cream`}>
        <h1 id="header" className={`${italiana.className} flex text-3xl p-10 place-content-center`}> to Listen .</h1>
        <AddToList />
        <br></br>
        <div id="list_container" className="flex ml-5 justify-start">
            <ul id="list_of_items"
            className="flex flex-col w-full">
              {todos.map((todo) => (
                  <TodoItem 
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
              <CheckedItem 
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

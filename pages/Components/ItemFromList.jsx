import { React, useState } from "react";

function ItemFromList({ todo, markChecked, deleteFromList}) {

    return (
        <div key={todo.id} className={`${todo.done ? "text-blue" : ""} flex  items-center`}>
        <p id="coral_square" className="bg-coral p-5 text-coral max-w-fit">a</p>
        <p className="flex flex-row pl-5 w-full justify-between">
          <span onClick={() => markChecked(todo.id)}>{todo.text}</span>
          <button onClick={() => deleteFromList(todo.id)} className=" text-coral font-semibold flex pr-8">
            delete
          </button>
        </p>
      </div>
    )
}

export default ItemFromList;
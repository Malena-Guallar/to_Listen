import { React, useState } from "react";

function ItemFromList({ todo, markChecked }) {


    return (
        <div key={todo.id} className="flex items-center">
        <p id="coral_square" className="bg-coral p-5 text-coral max-w-fit">a</p>
        <p className="flex flex-row pl-5 w-full justify-between">
          <p>{todo.text}</p>
          <button onClick={() => markChecked(todo.id)}>mark checked</button>
        </p>
      </div>
    )
}

export default ItemFromList;
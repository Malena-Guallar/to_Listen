import { React } from "react";

function ItemFromCheckedList({ todo, deleteFromList }) {

    return (
        <div key={todo.id} className="flex items-center">
        <p id="coral_square" className="bg-coral p-5 text-coral max-w-fit">a</p>
        <p className="flex flex-row pl-5 w-full justify-between">
            <p>{todo.text}</p>
          <button onClick={() => deleteFromList(todo.id)} className=" text-coral font-semibold flex pr-8">
            delete
          </button>
        </p>
      </div>
    )
}

export default ItemFromCheckedList;
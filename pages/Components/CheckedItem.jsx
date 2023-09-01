import { React } from "react";
import { useDispatch } from "react-redux";
import { deleteFromList } from "../../Redux/List.slice";


function CheckedItem({ todo }) {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFromList(todo.id));
  }

    return (
        <div key={todo.id} className="flex items-center">
        <p id="coral_square" className="bg-coral p-5 text-coral max-w-fit">a</p>
        <p className="flex flex-row pl-5 w-full justify-between">
            <p>{todo.text}</p>
          <button onClick={handleDelete} className=" text-coral font-semibold flex pr-8">
            delete
          </button>
        </p>
      </div>
    )
}

export default CheckedItem;
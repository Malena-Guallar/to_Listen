import { React } from "react";
import { useDispatch, useStore } from "react-redux";
import { markChecked } from "../../Redux/List.slice";

function TodoItem({ todo }) {

  const dispatch = useDispatch();
  const store = useStore();

  const handleMarkChecked = () => {
    dispatch(markChecked(todo.id));
    console.log(store.getState());
  }


    return (
        <div key={todo.id} className="flex items-center">
        <p id="coral_square" className="bg-coral p-5 text-coral max-w-fit">a</p>
        <p className="flex flex-row pl-5 w-full justify-between">
          <p>{todo.text}</p>
          <button onClick={handleMarkChecked}>mark checked</button>
        </p>
      </div>
    )
}

export default TodoItem;
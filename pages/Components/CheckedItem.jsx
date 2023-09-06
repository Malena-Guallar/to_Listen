import { React } from "react";
import { useDispatch } from "react-redux";
import { deleteFromList } from "../../Redux/List.slice";

function CheckedItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteFromDatabase(todo.id);
    dispatch(deleteFromList(todo.id));
  };

  const deleteFromDatabase = async (id) => {
    const url = "http://localhost:3000/api/musicItem/" + id;
    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    console.log(response.message);
  };

  return (
    <div key={todo.id} className="flex items-center">
      <p id="coral_square" className="bg-coral p-5 text-coral max-w-fit">
        a
      </p>
      <p className="flex flex-row pl-5 w-full justify-between">
        <p>{todo.text}</p>
        <button
          onClick={handleDelete}
          className=" text-coral font-semibold flex pr-8"
        >
          delete
        </button>
      </p>
    </div>
  );
}

export default CheckedItem;

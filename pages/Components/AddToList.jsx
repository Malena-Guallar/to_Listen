import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addTolist } from "../../Redux/List.slice";

function AddToList() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    const itemId = await addToDatabase(input, false);
    dispatch(addTolist({ id: itemId, text: input, done: false }));
    setInput("");
  };

  const addToDatabase = async (text, done) => {
    const url = "http://localhost:3000/api/musicItem";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text: input,
        done: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    console.log(response.message);
    return response.data._id;
  };

  return (
    <div id="form_container" className="flex flex-row ml-5">
      <p id="blue_square" className="bg-blue p-5 text-blue">
        a
      </p>
      <form
        id="form"
        onSubmit={handleSubmit}
        className="flex items-center ml-5"
      >
        <input
          id="input"
          className="flex-row bg-transparent content-center py-4 italic font-light"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add something to listen"
        />
        <button type="submit" className="font-semibold pl-3 text-blue">
          add
        </button>
      </form>
    </div>
  );
}

export default AddToList;

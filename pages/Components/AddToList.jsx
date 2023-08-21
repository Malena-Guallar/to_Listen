import { React, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { addTolist } from "../../Redux/List.slice";

function AddToList() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const store = useStore();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!input) {
          return;
      }
      dispatch(addTolist({ id: Date.now(), text: input, done: false })); // Dispatch the action
      setInput("");
      console.log(store.getState())
  };


    return (
        <div id="form_container" className="flex flex-row ml-5">
        <p id="blue_square" className="bg-blue p-5 text-blue" >a</p>
        <form id="form" onSubmit={handleSubmit} className="flex items-center ml-5">
        <input 
            id="input"
            className="flex-row bg-transparent content-center py-4 italic font-light"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add something to listen" />
        <button type="submit" className="font-semibold pl-3 text-blue">add</button>
        </form>
        </div>
    )
};

export default AddToList;


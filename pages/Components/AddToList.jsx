import { React, useState } from "react";

function AddToList({ todos, setTodos }) {

    const [input, setInput] = useState("");

    const addToList = (e) => {
        e.preventDefault();
        if (!input){
          return;
        } else {
          setTodos([...todos, { id: Date.now(), text: input, done: false }]);
          setInput("");
        };
      };


    return (
        <div id="form_container" className="flex flex-row ml-5">
        <p id="blue_square" className="bg-blue p-5 text-blue" >a</p>
        <form id="form" onSubmit={addToList} className="flex items-center ml-5">
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


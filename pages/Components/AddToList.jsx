import { React, useState } from "react";

function AddToList() {
    const [input, setInput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Add button clicked");
        const url = "http://localhost:3000/api/musicItem";
        await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                text: input,
                done: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json())
        .then((json) => console.log(json));
    }

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
}
export default AddToList;
// module.export = AddToList;
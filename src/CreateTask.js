
import React, {useState} from "react";

import "./CreateTask.css";

export default function CreateTask(props) {

    let [value, setValue] = useState("");

    function handleSubmit (e) {
        e.preventDefault();
        props.addTask({
            title: value,
            completed: false
        })
        setValue("");
    }

    // if(props.oldTask){
    //     setValue(props.oldTask);
    // }
    

    return (
        <form onSubmit={handleSubmit} id="task-form">
            <input type="text" value={value} id="task-input" placeholder="Add a todo" onChange={(e) => setValue(e.target.value)}/>
            <input type="submit" value="Add" id="submit-btn"/>
        </form>
    )
}
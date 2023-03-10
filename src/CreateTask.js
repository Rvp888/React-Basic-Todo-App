
import React, {useState} from "react";

import "./CreateTask.css";

function CreateTask(props) {

    let [value, setValue] = useState("");

    function handleSubmit (e) {
        e.preventDefault();
        props.addTask({
            title: value,
            completed: false
        })
        setValue("");
    }

    

    return (
        <form onSubmit={handleSubmit} id="task-form">
            <input type="text" value={value} id="task-input" placeholder="Add a todo" onChange={(e) => setValue(e.target.value)}/>
            <input type="submit" value="Add" id="submit-btn"/>
        </form>
    )
}

export default React.memo(CreateTask);
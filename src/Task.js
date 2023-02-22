
import React from "react";

import "./Task.css";

function Task(props) {

    function handleUpdateTask() {
        props.updateTask(props.index);
    }

    function handleRemoveTask() {
        props.removeTask(props.index);
    }

    function handleEditTask() {
        const newTask = prompt("Edit Task", props.title);
        props.editTask(props.index, newTask);
    }

    return (
        <div className="task">
            <p id="task-title">{props.title}</p>
            <div class="update-delete-btns">
                {props.completed && <button id="complete-btn" onClick={handleUpdateTask}>Completed</button>}
                {!props.completed && <button id="update-btn" onClick={handleUpdateTask}>Pending</button>}
                <button id="edit-btn" onClick={handleEditTask}>Edit</button>
                <button id="delete-btn" onClick={handleRemoveTask}>Remove</button>
            </div>
        </div>
    )
}

export default React.memo(Task);
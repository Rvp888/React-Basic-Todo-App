
import "./Task.css";
import CreateTask from "./CreateTask";

export default function Task(props) {

    function handleUpdateTask() {
        props.updateTask(props.index);
    }

    function handleRemoveTask() {
        props.removeTask(props.index);
    }

    function handleEditTask() {
        props.editTask(props.index);
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
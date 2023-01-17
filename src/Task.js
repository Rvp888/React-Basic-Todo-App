
import "./Task.css";

export default function Task(props) {

    function handleUpdateTask() {
        props.updateTask(props.index);
    }

    function handleRemoveTask() {
        props.removeTask(props.index);
    }

    return (
        <div className="task">
            <p id="task-title">{props.title}</p>
            <div class="update-delete-btns">
                {props.completed && <button id="complete-btn">Completed</button>}
                {!props.completed && <button id="update-btn" onClick={handleUpdateTask}>Pending</button>}
                <button id="delete-btn" onClick={handleRemoveTask}>Remove</button>
            </div>
        </div>
    )
}
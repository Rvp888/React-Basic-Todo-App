
import "./Task.css";

export default function Task(props) {

    return (
        <div className="task">
            <p id="task-title">{props.title}</p>
            {props.completed && <button id="task-btn">Completed</button>}
        </div>
    )
}
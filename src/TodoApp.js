
import React, {useState} from "react";

import CreateTask from "./CreateTask";
import Task from "./Task";

export default function TodoApp() {

    const [tasks, setTasks] = useState([
        {
            title: "Go to Gym",
            completed: true
        },
        {
            title: "Buy Grocery",
            completed: false
        }
    ]);

    function addTask(task) {
        setTasks(tasks => {
            return [
                ...tasks,
                task
            ]
        })
    }

    return (
        <div className="todo-container">
            <h1>Todo-App</h1>
            <div className="create-todo">
                <CreateTask addTask={addTask}/>
            </div>
            <div className="todo-list">
                <h2>Todo-List</h2>
                {tasks.map((task, index) => <Task {...task} key={index}/>)}
            </div>
        </div>
    )
}

import React, {useState} from "react";

import CreateTask from "./CreateTask";
import Task from "./Task";

import "./TodoApp.css";

export default function TodoApp() {

    const [tasks, setTasks] = useState([]);
    
    React.useEffect(() => {
        let getTasks = JSON.parse(localStorage.getItem("tasks"));
        setTasks(() => getTasks);
    },[]);

    React.useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);


    function addTask(task) {
        setTasks(tasks => {
            return [
                ...tasks,
                task
            ]
        })
    }

    function pendingTasks() {
        let pendingCount = 0;
        tasks.forEach((task) => {
            if(!task.completed){
                pendingCount += 1;
            }
        });
        return pendingCount;
    }

    function updateTask(index) {
        setTasks((tasks) => {
            let newTasks = [...tasks];
            newTasks[index].completed = true;
            return newTasks;
        })
    }

    function removeTask(index) {
        setTasks((tasks) => {
            let newTasks = [...tasks];
            newTasks.splice(index, 1);
            return newTasks;
        })
    }

    return (
        <div className="todo-container">
            <h1 id="app-title">Todo-App</h1>
            <div className="create-todo">
                <CreateTask addTask={addTask}/>
            </div>
            <div className="todo-list">
                <h2 id="todo-list-title">Todo-Tasks</h2>
                <div className="task-count">
                    <p id="total-tasks">Total tasks: {tasks.length}</p>
                    <p id="pending-tasks">Pending tasks: {pendingTasks()}</p>
                </div>
                <div className="task-div">
                    {tasks.map((task, index) => <Task {...task} key={index} index={index} updateTask={updateTask} removeTask={removeTask}/>)}
                </div>
            </div>
        </div>
    )
}
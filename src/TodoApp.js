
import React, {useCallback, useState} from "react";

import CreateTask from "./CreateTask";
import Task from "./Task";

import "./TodoApp.css";

export default function TodoApp() {

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState(null);

    
    React.useEffect(() => {
        let getTasks = JSON.parse(localStorage.getItem("tasks"));
        setTasks(() => getTasks);
    },[]);

    React.useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);


    const addTask = useCallback((task) => {
        console.log("add task runned");
        setTasks(tasks => {
            return [
                ...tasks,
                task
            ]
        })
    },[]);


    const pendingTasks = useCallback(() => {
        let pendingCount = 0;
        tasks.forEach((task) => {
            if(!task.completed){
                pendingCount += 1;
            }
        });
        return pendingCount;
    },[tasks]);
    

    const updateTask = useCallback((index) => {
        setTasks((tasks) => {
            let newTasks = [...tasks];
            newTasks[index].completed = !newTasks[index].completed;
            return newTasks;
        })
    },[]);


    const editTask = useCallback((index,task) => {
        setTasks((tasks) => {
            let newTasks = [...tasks];
            newTasks[index].title = task;
            return newTasks;
        })
    },[]);
    

    const removeTask = useCallback((index) => {
        setTasks((tasks) => {
            let newTasks = [...tasks];
            newTasks.splice(index, 1);
            return newTasks;
        })
    },[]);

    const handleFilter = (e) => {
        console.log(e.target.value);
        if (e.target.value == 'true'){
            setFilter(true);
        }
        else if (e.target.value == 'false'){
            setFilter(false);
        }
        else {
            setFilter(null);
        }  
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
                <div>
                    <label>Filter: </label>
                    <select onChange={e => handleFilter(e)} className="filter">
                        <option value={null}>All</option>
                        <option value={true}>Completed</option>
                        <option value={false}>Pending</option>
                    </select>
                </div>
                
                <div className="task-div">
                    {tasks.map((task, index) => filter === null || filter === task.completed ? <Task {...task} key={index} index={index} updateTask={updateTask} editTask={editTask} removeTask={removeTask}/> : <></>)}
                </div>
            </div>
        </div>
    )
}
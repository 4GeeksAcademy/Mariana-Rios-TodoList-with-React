import React, { useEffect } from "react";
import { useState } from "react";



const Tasks = () => {

    const [taskList, setTasklist ] = useState([]);

    const submitNewtask = (e) => {
        if (e.key === "Enter") {
            setTasklist([...taskList, ...[e.target.value]]);
        };
    };

    const [isHovering, setIsHovering] = useState(false); 
    
    const hovering = (i) => {
        document.querySelector("#deletebtn" + i).style.visibility = "visible"
    };

    const notHovering = (i) => {
        document.querySelector("#deletebtn" + i).style.visibility = "hidden"
    };

    const deleteTask = (i) =>{
        let newTaskList = taskList.filter((item, indx) => indx !== i)
        setTasklist(newTaskList);
    };

    return(
        <div>
            <div>
                <input type="text" className="py-3 w-100 inputLine" placeholder="What needs to be done?" onKeyDown={(e) => submitNewtask(e)}/>
            </div>
            <div>
                <ul className="tasksUL">
                    {taskList.map((task, i) => (
                        <li className="listItem" onMouseOver={() => hovering(i)} onMouseOut={() => notHovering(i)} key={i}>
                            {task}
                            <i onClick={() => deleteTask(i)} className="fa-solid fa-xmark deletebtn" id={"deletebtn" + i}></i>
                        </li>
                        ))}
                </ul>
            </div>
            <div className="itemsLeft">{taskList.length} Items Left</div>
        </div>
    );
};

export default Tasks;
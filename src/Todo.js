import React, { useState } from 'react';
import './Todo.css';
import Lists from "./components/dolists";
import Form from "./components/TodoForm";

// Todo Id

function TODO() {
    const [data, setData] = useState([]);
    const myFunc = (val) => {
        const todo = val
        setData ( [...data, todo]);
        console.log(data);

    };

    // Handle remove
    const removeItem = (id) => {

        // // Filter all todos except the one to be removed
        // const task = this.data.filter((todo) => {
        //     if(todo.index !== id) return todo;
        // });
        //
        // // Update state with filter
        // setData ( [task]);
    }


    
    return (
        <>
            <header id="myDIV" className="header">
                <h2>My To Do List</h2>
                <Form add={myFunc}/>
            </header>
            <Lists id="myUL" lists={data} removeItem = {data}/>
        </>

    );
}

export default TODO;
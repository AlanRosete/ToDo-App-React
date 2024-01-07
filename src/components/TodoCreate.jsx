import { useState } from "react";

const TodoCreate = ({createTodo}) => { 

    const [title, setTitle] = useState("")

    const handleSubmitAddTodo = (e) => { 
        e.preventDefault();


        if (!title.trim()) {
            return setTitle("")
        }

        createTodo(title);
        setTitle("")

     }

    return (

        <form onSubmit={handleSubmitAddTodo} className="overflow-hidden flex items-center rounded-md bg-white dark:bg-gray-800 py-4 px-4 gap-4 mt-8 transition-all duration-1000">

            <span className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block "></span>
            <input className="outline-0 w-full text-gray-400 dark:text-gray-400 dark:bg-gray-800 transition-all duration-1000" type="text" placeholder="Create a new todo.." value={title} onChange={(e)=>setTitle(e.target.value)}/>
        
        </form>

    )
}

export default TodoCreate


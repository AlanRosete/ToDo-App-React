import React from "react"
import IconCheck from "./icons/IconCheck"
import IconCross from "./icons/IconCross"


const TodoItem = React.forwardRef(({todo, updateTodo, removeTodo, ...props }, ref) => { 

    const {id, title, completed} = todo;

    return (
        <article {...props} ref={ref} className="flex gap-4 py-4 border-b-[0.5px] border-b-gray-400 px-4 dark:bg-gray-800 ">
        {/* <button className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block"><IconCheck /> </button> */}
        <button className={`{${completed ? "transition-all duration-1000 h-6 w-6 rounder-full border-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center" : "h-6 w-6 rounder-full border-2 rounded-2xl flex justify-center items-center"}
        }`}onClick={() => updateTodo(id)}>
            {completed && <IconCheck />} 
        </button>
        <p className={`text-gray-600 grow dark:text-gray-400 transition-all duration-1000 ${completed && "line-through"}`}>{title}</p>
        <button className="" onClick={() => removeTodo(id)}><IconCross/></button>

        </article>
    )
 })

export default TodoItem
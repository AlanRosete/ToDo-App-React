const TodoFilter = ({changeFilter, filter}) => { 
    return (
        <section className="container mx-auto px-4 mt-8">

            <div className="bg-white flex justify-center p-4 rounded-md gap-4 dark:bg-gray-800 transition-all duration-1000">
            <button className={`${filter === "all" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter("all")}>All</button>
            <button className={`${filter === "active" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter("active")}>Active</button>
            <button className={`${filter === "complete" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter("complete")}>Complete</button>
            </div>
            
        </section>
    )
 }

export default TodoFilter
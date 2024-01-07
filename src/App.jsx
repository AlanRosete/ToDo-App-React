import { DragDropContext, Draggable , Droppable } from "@hello-pangea/dnd";
import { useState,useEffect } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
    
    /*
    const initialStateTodos = [

        {id: 1, title: "Prueba React 1", completed: true},
        {id: 2, title: "Prueba React 2", completed: false},
        {id: 3, title: "Prueba React 3", completed: false},
        {id: 4, title: "Prueba React 4", completed: false}
    ]
    */

    const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed)

        return result
    }

const App = ()=> {

    const [todos, setTodos] = useState(initialStateTodos)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo])
        console.log({newTodo})
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !==id ) )
    }


    const updateTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed))
    }

    const [filter, setFilter] = useState("all")

    const changeFilter = (filter) => setFilter(filter)

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos
            case "active":
                return todos.filter((todo) => !todo.completed)
            case "complete":
                return todos.filter((todo) => todo.completed)
            default:
                return todos;
        }
    }

        const handleDragEnd = (result) => {
            const {destination, source} = result
            if (!destination) return;
            if (source.index === destination.index && source.droppableId === destination.droppableId) return;
            setTodos((prevTasks) => reorder(prevTasks,source.index, destination.index)
            );
        }

    return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
   
        <Header />

        <main className="container mx-auto px-4 mt-6 md:max-w-xl">

            <TodoCreate createTodo={createTodo} />


            <DragDropContext onDragEnd={handleDragEnd}>
            <TodoList todos={filteredTodos()} updateTodo={updateTodo} removeTodo={removeTodo}/>
            </DragDropContext>
           

            <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
     
            <TodoFilter changeFilter={changeFilter} filter={filter} />

        </main>

    </div>
    );
}

export default App
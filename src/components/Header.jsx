import { useState } from "react"
import MoonIcon from "./icons/IconMoon"
import IconSun from "./icons/IconSun"
import { useEffect } from "react"

const inicialStateDarkMode = localStorage.getItem("theme") === "dark" ? true : false;

const Header = () => { 

    const [darkMode, setDarkMode] = useState(inicialStateDarkMode)

    useEffect(() => { 
        if(darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else { 
            document.documentElement.classList.remove("dark")  
            localStorage.setItem("theme", "light")
        }
    }, [darkMode]);


    return (
        <header className="container mx-auto px-4 md:max-w-xl">

        <div className="container mx-auto px-4 flex justify-between pt-8">
            <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em]">Todo</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <IconSun /> : <MoonIcon />}    
            </button>
        </div>  
        
        </header>
    )
 }

export default Header
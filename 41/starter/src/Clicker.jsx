import { useState, useEffect } from "react"

export default function Clicker() {
    const [count, setCount] = useState( parseInt(localStorage.getItem('count') ?? 0) )
    
    //trigger on first render
    useEffect(()=>{

        //will run when the component is created first time again
        //console.log('first render, will run when the component is created first time again')

        // will run only when the component is destroyed/disposed 
        return () => {
            localStorage.removeItem('count')
            //console.log('count '+count)
            //console.log('ONLY WHEN COMPONENT IS BEING DISPOSED!!, will run only when the component is destroyed/disposed ')
        }
    },[])

    //trigger when 'count' changes
    useEffect(()=>{
        localStorage.setItem('count',count)
    },[count])

    const buttonClick = () => {
        setCount( (value) => {return value +1} )
    }
    
    return <div>
        <div>Click count: {count}</div>
        <button onClick={ buttonClick }>Click me!</button>
    </div>
}
import { useState} from "react"

export default function Counter(){

    const [count, setCount] = useState(10)
    // const [decrease, setDecrease] = useState(count)
    // const [reset, setReset] = useState(count)
    // const [multiply, setMultiply] = useState(count)

    function increase(){
        setCount(count + 1)
    }
    function deCrease(){
        setCount(count - 1)
    }
    function toZero(){
        setCount(count * 0)
    }

    return(
        <div className="counter-container">
           <h1>Counter Value: {count} </h1>
           <button onClick={increase}>Increase by 1</button>
           <button onClick={deCrease}>Decrease by 1</button>
           <button onClick={toZero}>Reset to 0</button> 
           <button onClick={function multiplicity(){
            setCount(count * 2)
            }}>Multiply by 2</button>
        </div>
    )
}
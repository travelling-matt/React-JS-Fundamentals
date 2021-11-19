// code along with Leon.

import { useState } from "react"
import { evaluate } from "mathjs"

const App = () => {
    const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "-", "="]
    const [display, setDisplay] = useState("")

    const handler =(value) => {
        if(value === '='){
            setDisplay(evaluate(display))
            // evaluate the string
        } else if (value === 'c'){
            setDisplay("")
            // clear the string
        }else{
            setDisplay(display + value)

        }

    }

    // single component li:24-34
    // return (
    //     <div>
    //         <h1>React Calculator</h1>
    //         <div>
    //             <h2>{display}</h2>            
    //             {buttons.map((button, index) => {
    //                 return <button onClick={ () => handler(button)}>{button}</button>
    //             })}
    //         </div>            
    //     </div>
    // )

    // if mutliple compnents wanted li:37-47 + li:51-57
    return (
        <div>
            <h1>React Calculator</h1>
            <div>
                <h2>{display}</h2>            
                {buttons.map((button, index) => {
                    return <Button key={index} button={button} handler={handler}/>
                })}
            </div>            
        </div>
    )
}


const Button = ( { button, handler }) => {
    return (
        <div>
            <button onClick={() => handler(button)}>{button}</button>
        </div>
    )
}


export default App
//************************YOUTUBE TUTORIAL****************************
//********************************************************************

// import { useState } from "react"
// import './calc.css'

// const App = () => {

//     const [calc, setCalc] = useState("");
//     const [result, setResult] = useState("");

//     const ops = ['/', '*', '+', '-', '.'];

//     const updateCalc = value => {
//         if (
//             ops.includes(value) && calc === '' ||
//             ops.includes(value) && ops.includes(calc.slice(-1))
//         ) {
//             return;
//         }

//         setCalc(calc + value);

//         if (!ops.includes(value)) {
//             setResult(eval(calc + value).toString());
//         }
//     }
     
//     const createDigits = () => {
//         const digits = [];

//         for (let i = 1; i < 10; i++) {
//             digits.push(
//                 <button
//                     onClick={() => updateCalc(i.toString())}
//                     key={i}>
//                     {i}
//                 </button>
//             )
//         }

//         return digits

//     }

//     const calculate = () => {
//         setCalc(eval(calc).toString());
//     }

//     const deleteLast = () => {
//         if (calc == '') {
//             return;
//         }

//         const value = calc.slice(0,-1);

//         setCalc(value);
//     }

//         return (
//         <div className="App">
//             <div className="calculator">
                
//                 <div className="display">
//                     {result ? <span>(0{result})</span> : ''}&nbsp;
//                     { calc || "0" }
//                 </div>

//                 <div className="operators">
//                     <button onClick={() => updateCalc('/')}>/</button>
//                     <button onClick={() => updateCalc('*')}>*</button>
//                     <button onClick={() => updateCalc('+')}>+</button>
//                     <button onClick={() => updateCalc('-')}>-</button>

//                     <button onClick={deleteLast}>DEL</button>
//                 </div>

//                 <div className="digits">
//                     { createDigits() }
//                     <button onClick={() => updateCalc('/0')}>0</button>
//                     <button onClick={() => updateCalc('.')}>.</button>

//                     <button onClick={calculate}>=</button>
//                 </div>

//             </div>
//         </div>
//     );
//   }

// export default App

// //************************END OF YOUTUBE TUTORIAL*********************
// //********************************************************************

// ******************MINIMALIST CALCULATOR - works************************
// no styling. type directly into input click calculate button to 'evaluate' input

// import { useState } from "react"
// import { evaluate } from 'mathjs'

// const App = () => {
//     const [total, setTotal] = useState("")
//     const [display, setDisplay] = useState("")

//     const changeHandler = (event) => {
//         setDisplay(event.target.value)
//       }

//     const calculate =() =>{
//         setTotal(evaluate(display))
//     }

//      return (
//         <div className="mainContainer">
//         <h1>Minimalist Calculator</h1>
//             <div className="input">
//                 <p>Result: {total}</p>
//                 <p><input type="text" onChange={changeHandler}/></p>
//                 <p className="btnCalc"><button onClick={calculate}>Calculate</button></p>       
//             </div>
//         </div>
//         )

// }

// export default App

// ******************MINIMALIST CALCULATOR ENDS************************

// ******************CALCULATOR WITH BUTTONS - starts******************
// NOTES. no styling. inital buttons array can be reordered depending on styling.
// total and display useStates used so that 'display' can be reset when evaluated as the result is set in 'total'
// Placeholders in component can be removed when styled. They are there for legibility and to reduce layout shift.

import { useState } from "react"
import { evaluate } from 'mathjs'

const App = () => {
    const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", ".", "0", "/", "+", "-", "="]
    const [total, setTotal] = useState("")
    const [display, setDisplay] = useState("")

    const handler = (value) => {
        if (value === '='){
            setTotal(evaluate(display))
            setDisplay("")
        } else if (value === 'c'){
            setDisplay("")
        } else {
            setDisplay(display + value)
        }
    }

     return (
        <div className="mainContainer">
            <h1>Simple React Calculator</h1>
            <h2>totalPlaceholder {total}</h2>
            <h2>displayPlaceholder {display}</h2>
            {buttons.map((button, index) => {
                return <button key={index} onClick={ () => handler(button)}>{button}</button>
            })}
        </div>
    )

}

export default App
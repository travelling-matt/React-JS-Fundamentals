// MONDAY*******************************************

// //class component
// import React from "react"
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>I'm a class omponent</h1>
//         <Person />
//       </div>
//     );
//   }
// }

// const Person = () => {
//   return (
//     <div>
//       <h1>Welcome to my site</h1>
//     </div>
//   )
// }

// //functional component
// const App = () => {
//   return (
//     <div>
//     <h1>Welcome to my site</h1>
//     <h2>made by Matt</h2>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to my site</h1>
//       <Person name="Dan" age="34" />
//       <Job job="Junior Developer" />
//       <Person name="Stuart" age="30-something" />
//       <Job job=" Chef" />
//       <Person name="Ben" age="21" />
//       <Job job="Tree Surgeon" />
//     </div>
//   )
// }

// const Person = (props) => {
//   return <p>Hi, I'm {props.name} and I'm {props.age} years old.</p>
// }

// const Job = (props) => {
//   return <p>I'm a {props.job}.</p>
// }

// import './App.css'

// const App = () => {
//   return (
//     <div className="app">
//       <p>Hello World</p>
//       <Person name="Leon" petsName="Bob" />
//       <Person name="Jordan" petsName="Bella"/>
//     </div>
//   )
// }

// const Person = (props) => {
//     return (
//       <div>
//         <h2>My name is {props.name}</h2>
//         <Pet petsName={props.petsName} />
//       </div>
//     ) 
// }

// const Pet = (props) => {
//   return <p>my pets name is {props.petsName}</p>
// }

// //destructured
// const Pet = (props) => {
//   return <p>My pets name is {props.petsName}.</p>
// }

// export default App

// const App = () => {
//   return (
//     <div>
//       <h1>welcome to my sight</h1>
//       <Person name="leon" petsName="bob" />
//       <Person name="jordan" petsName="bella" />
//       <Person name="ben" petsName="bruddah" />
//     </div>
//   )
// }

// const Person = ({ name, petsName }) => {
//   return (
//     <div>
//       <h2>my name is {name}</h2>
//       <Pet petsName={petsName} />
//     </div>
//   )
// }

//*************************************************************
//*********** MONDAY CHALLENGE START **************************
//*************************************************************


// //*****  BBC CHALLENGE   *****

// import './App.css'
// import clock from './images/clock.JPG'
// //import comment from './images/comment.JPG'
// import bbc00 from './images/bbc00.png'
// import bbc01 from './images/bbc01.png'
// import bbc02 from './images/bbc02.png'
// import bbc03 from './images/bbc03.png'
// import bbc04 from './images/bbc04.png'
// import bbc05 from './images/bbc05.png'

// const App = () => {
//   return (
//     <div className="app">
//         <div className="row1">
//           <div className="mainStory">
//               <Main src={bbc00} headLine="Rashid supports Rafiq's allegation Vaughan made racist comment" byLine="England bowler Adil Rashid is the third player to say that he heard Michael Vaughan make a racist comment to a group of Asian cricketers." time="26m" category="Cricket" />
//             </div>
//             <div className="smallStory">
//               <Small src={bbc01} headLine="Smith named new Norwich City head coach" byLine="" time="3h" category="Football" comments="338" />
//             </div>          
//         </div>
//         <div className="row2">
//             <Small src={bbc02} headLine="A Gripping showdown in an atmosphere of bitterness and suspicion" byLine="" time="11h" category="Formula 1" />
//             <Small src={bbc03} headLine="Federer unlikely to play in Australian Open, says coach Ljubic" byLine="" time="2h" category="Tennis" />
//             <Small src={bbc04} headLine="Why Smith might prove better fit at Norwich that Lampard" byLine="" time="2h" category="Football" />
//             <Small src={bbc05} headLine="Typical Australia reinvigorated just in time for Ashes" byLine="" time="2h" category="Cricket" />
//         </div>
//     </div>
//   )
// }

// const Main = (props) => {
//   return (
//     <div className="largeContainer">
//         <img className="imgLarge" src={props.src} />
//         <div className="textLarge">
//           <h4>"{props.headLine}"</h4>
//           <p>{props.byLine}</p>
//           <p className="timeLarge"><img src={clock} alt="clock"/> {props.time} {props.category}</p>
//         </div>
//     </div>
//   ) 
// }

// const Small = (props) => {
//     return (
//       <div className="smallContainer">
//           <img className="imgSmall" src={props.src} />
//           <h4>"{props.headLine}"</h4>  
//           <p className="timeLarge"><img src={clock} alt="clock"/> {props.time} {props.category}</p>
//       </div>
//     ) 
// }

// export default App

// //*********************BBC ends***************************/

// //********************AIRBNB STARTS - happy***********************/
// import './App.css'
// import airbnb1 from './images/airbnbImage1.jpeg'
// import airbnb2 from './images/airbnbImage2.jpeg'
// import airbnb3 from './images/airbnbImage3.jpeg'
// import airbnb4 from './images/airbnbImage4.jpeg'

// const App = () => {
//   return (
//     <div className="app">       
//             <Splash src={airbnb4} subTitle="Entire homes" />
//             <Splash src={airbnb2} subTitle="Unique Stays" />
//             <Splash src={airbnb3} subTitle="Cabins and cottages" />
//             <Splash src={airbnb1} subTitle="Pets allowed" />          
//     </div>
//   )
// }

// const Splash = (props) => {
//   return (
//     <div className="splash">
//         <img src={props.src}/>
//         <p>{props.subTitle}</p>
//     </div>
//   ) 
// }

// export default App
// //********************AIRBNB ENDS ********************** */

// //********************NETFLIX STARTS - happy********************** */

// import './App.css'
// import netFlix1 from './images/netflixImage1.png'
// import netFlix2 from './images/netflixImage2.png'
// import netFlix3 from './images/netflixImage3.png'
// import netFlix4 from './images/netflixImage4.png'
// import netFlix5 from './images/netflixImage5.png'

// const App = () => {
//   return (
//     <div className="app">       
//             <Splash src={netFlix1} />
//             <Splash src={netFlix2} />
//             <Splash src={netFlix3} />
//             <Splash src={netFlix4} /> 
//             <Splash src={netFlix5} />          
//     </div>
//   )
// }

// const Splash = (props) => {
//   return (
//     <div className="splash">
//         <img src={props.src}/>
//     </div>
//   ) 
// }

// export default App

// //********************NETFLIX ENDS ********************** */

// //*************************************************************
// //*********** CHALLENGE END *********************************
// //*************************************************************

// TUESDAY *******************************************************

// import { useState } from 'react'

// // const App =() => {
// //   const [num, setNum] = useState(0)
// //   return (
// //     <div>
// //       <h1>{num}</h1>
// //       <button onClick={ () => setNum(num + 1)}>click</button>
// //     </div>
// //   )
// // }


// const App =() => {
//   const [persons, setPersons] = useState([
//     {firstName: "Leon"},
//     {firstName: "Jordan"},  
//     {firstName: "ben"},
//     {firstName: "dan"},
//     {firstName: "myles"},
//     {firstName: "andy"},
//     {firstName: "neil"},
//     {firstName: "laura"},
//     {firstName: "liam"},
//     {firstName: "jill"},
//     {firstName: "john"},
//   ])

//   const greeting = (name) => {
//     alert("hello there " + name)
//   }

//   return (
//     <div>
//       <h1>List of People</h1>
//       {persons.map((person, index) => {
//         return <Person key={index} name={person.firstName} func={greeting}/>
//         // <p>user: {person.firstName}</p>
//       })}
//       {/* <Person name={persons[0].firstName} func={greeting} />
//       <Person name={persons[1].firstName} func={greeting} /> */}
//     </div>
//   )
// }

// const Person = (props) => {
//   return (
//     <div>
//       <h2>Hello there {props.name}</h2>
//       <button onClick={() => props.func(props.name)}>greeting</button>
//     </div>
//   )
// }

// export default App

//info for name array above

// {firstName: "ben"},
// {firstName: "dan"},
// {firstName: "myles"},
// {firstName: "andy"},
// {firstName: "neil"},
// {firstName: "laura"},
// {firstName: "liam"},
// {firstName: "jill"},
// {firstName: "john"},


/******************************************************/
/**********************WEDNESDAY***********************/
/******************************************************/

/*useState Hooks and functional components*/
//remember to immport the 'components' you want from react library

//**********************add number to an array

// import { useState } from "react"

// const App = () => {
//   const [nums, setNums] = useState ([1, 2, 3, 4])

//   const addHandler = () => {
//     let storedNums = [...nums]
//     //next line adds 1 to the last number of the array and adds it to the array (look right to left)
//     storedNums.push(storedNums[storedNums.length -1] +1)
//     setNums(storedNums)
//   }

//   return (
//     <div>
//       <h1>welcome to nums</h1>
//       {nums.map((num, index) => {
//         return <h2 key={index}>{num}</h2>
//       })}
//       <button onClick={addHandler}>add one</button>
//     </div>
//   )
// }

// //button onClick references addHandler function without argument

// export default App

//**********************remove number from array

// import { useState } from "react"

// const App = () => {
//   const [nums, setNums] = useState ([1, 2, 3, 4, 5])

//   const removeHandler = (index) => {
//     let storedNums = [...nums]
//     storedNums.splice(index, 1)
//     setNums(storedNums)
//   }

//   return (
//     <div>
//       <h1>welcome to nums</h1>
//       {nums.map((num, index) => {
//         return (
//         <div key={index}>
//           <h2>{num}</h2>
//           <button onClick={() => removeHandler(index)}>remove</button>
//           </div>
//       )
//       })}
      
//     </div>
//   )
// }

// // //button onClick references removeHandler function with an argument
// export default App

//*********************input text */

// import { useState } from "react"

// const App = () => {
//   const [input, setInput] = useState("hello")
//   const changeHandler = (event) => {
//     setInput(event.target.value)
//   }

//   return (
//     <div>
//       <h1>welcome to input</h1>
//       <input type="text" onChange={changeHandler}/>
//       <p>{input}</p>
//     </div>
//   )
// }

// // return (
// //   <div>
// //     <h1>welcome to input</h1>
// //     <input type="text" onChange={(event) => setInput(event.target.value)}/>
// //     <p>{input}</p>
// //   </div>
// // )
// // }
// // alternate way sending input directly form the input rather than calling the function

// export default App

/***********************************************/
/***************more than 1 state */

// import { useState } from "react"

// const App = () => {
//   const [input, setInput] = useState("hello")
//   const [favMovie, setFavMovie] = useState("")

//   const changeHandler = (event) => {
//     setInput(event.target.value)
//   }
//   const changeHandlerMovie = (event) => {
//     setFavMovie(event.target.value)
//   }
 
//   return (
//     <div>
//       <h1>welcome to input</h1>
//       <input type="text" onChange={changeHandler}/>
//       <p>Name: {input}</p>
//       <input type="text" onChange={changeHandlerMovie}/>
//       <p>Favourite movie: {favMovie}</p>
//     </div>
//   )
// }
// export default App


/********************************************************/
/***********  CHALLENGE - TODO LIST  ********************/
/********************************************************/

//******************** works to add number or remove number ****************************/
// import { useState } from "react"

// const App = () => {
//   const [nums, setNums] = useState ([1, 2, 3, 4])

//   const addHandler = () => {
//     let storedNums = [...nums]
//     //next line adds 1 to the last number of the array and adds it to the array (look right to left)
//     storedNums.push(storedNums[storedNums.length -1] + 1)
//     setNums(storedNums)
//   }

//   const removeHandler = (index) => {
//     let storedNums = [...nums]
//     storedNums.splice(index, 1)
//     setNums(storedNums)
//   }

//    return (
//     <div>
//       <h1>To do list</h1>
//       {nums.map((num, index) => {
//         return (
//           <div key={index}>
//           <h2>{num}</h2>
//           <button onClick={() => removeHandler(index)}>complete</button>
//           <button onClick={addHandler}>add item</button>
//           </div>
//         )
//       })}
//       </div>
//   )
// }

// export default App


/////////////////////////////////////////////////////////////////////////
//**************** ToDo List - Works ***********************************/

import { useState } from "react"
import './App.css'

const App = () => {
  const [todo, setTodo] = useState ([])
  const [input, setInput] = useState("")

  const changeHandler = (event) => {
    setInput(event.target.value)
  }

  const addHandler = () => {
    let addTask = [...todo]
    addTask.push(input)
    setTodo(addTask)
  }

  const removeHandler = (index) => {
    let addTask = [...todo]
    addTask.splice(index, 1)
    setTodo(addTask)
  }

   return (
    <div className="mainContainer">
      <h1>To do list</h1>
      <div className="input">
        <p><input type="text" onChange={changeHandler}/></p>
        <p className="btnRight"><button onClick={addHandler}>add new task</button></p>
      </div>
      {todo.map((task, index) => {
        return (
          <div className="taskList" key={index}>
            <h2>{task}</h2>
            <p className="btnRight"><button onClick={() => removeHandler(index)}>complete</button></p>
          </div>
        )
      })}
      </div>
  )
}

export default App
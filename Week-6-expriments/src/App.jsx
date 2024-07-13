import { useState } from 'react'
import { memo } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return (
//    <div>
//   <Headerupdate/>
//   <Headers title = "Abhinesh  "/>
//   </div>
//   )
// }


// function Headerupdate(){
//   const[firsttitle , setFirstTitle]= useState("my name is satish");

//   function updatetitle(){
//     setFirstTitle("my name is " + Math.random())
//   }
//   return<>
//   <button onClick={updatetitle}>Update th title</button>
//   <Headers title={firsttitle }/></>
  
// }


// function Headers ({title}){
//   return <div>
//     {title}
//   </div>
// }





/// ONE more solution for rerendering using MEMo

function App() {

const[title, setTitle] = useState("My name is satish")

function updatetitle(){
  setTitle("My name is "  + Math.random())
}

  return (
   <div>
    <button onClick={updatetitle}>Update the title</button>
    <Header title={title}/>
    <Header title = "satish" />

  </div>
  )
}


const Header = memo((({title})=>{
  return <div>
    {title}
  </div>
}))


export default App

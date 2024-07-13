import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return <div>
    <Cardwrapper>
      hii there
    </Cardwrapper>
    <Cardwrapper>
      <Text/>
    </Cardwrapper>
   </div>
  
}

function Cardwrapper({children}){
  console.log(children)
  return <div style={{border: "2px solid black", padding :20}}>
    {children}
  </div>
}

function Text(){
  return <div>
    <button>hii lodu</button>
  </div>
}


export default App

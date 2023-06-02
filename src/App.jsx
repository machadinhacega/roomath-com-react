import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import myHeader from './Header'
import resume from './Resume'
import myHome from './MyHome'
import navBar from './NavBar'
import './App.css'

function App() {

  return (
    <div className='home'>

      <div>{myHeader()}</div>
      <div>{resume()}</div>
      <div>{myHome()}</div>
      <div> {navBar()}</div>
      
    </div>
  )
}

export default App

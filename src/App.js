import React from 'react'
import Topicon from './components/Topicon'
import Footer from './components/Footer'
import Body from './components/Body'
import Bottom from './components/Bottom'
import "./App.css";
const App = () => {
  return (
    <div>
    <Topicon/>
      <Body/>
      <Footer/>
      <Bottom/>
    </div>
  )
}

export default App
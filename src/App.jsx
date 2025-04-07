import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Category from './components/Category'
import TopRes from './components/TopRes'
import Cart from './components/Cart'
import Item from './components/Item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Category></Category>
     <TopRes></TopRes>
     <Item></Item>
    
    </>
  )
}

export default App

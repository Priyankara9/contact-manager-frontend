import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './component/common/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>

    </>
  )
}

export default App

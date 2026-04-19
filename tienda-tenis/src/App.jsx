import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


  function App() {
  return (
    <div>
      <h1>Mi tienda de tenis 👟</h1>
      <h3>Se agrega la modificacion agrega la modificacion</h3>
      <Modulo1 />
         <Modulo2 />
    </div>
    
  );
}
// Modulo1.jsx
function Modulo1() {
  return (
    <section>
      <h2>Módulo 1</h2>
      <Orden1 />
    </section>
  )
}
 
function Modulo2(){
  return (
    <div style={{ border: '1px solid blue', margin: '10px', padding: '10px' }}>
      <h2>Módulo 2</h2>
      <Orden posicion="8" />
    </div>
  )
}

function Orden({ posicion }) {
  return (
    <div>
      <h3>Orden {posicion === '6' ? '1' : '2'}</h3>
      <p>Posición {posicion}</p>
    </div>
  )
}

// Orden1.jsx  
function Orden1() {
  return (
    <div>
      <h3>Orden 1</h3>
      <p>Posición 6</p>
    </div>
  )
}
export default App

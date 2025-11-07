import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Educacion from './components/Educacion'

export default function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <Header />
      <About />
      <Skills />
      <Educacion />
    </div>
  )
}
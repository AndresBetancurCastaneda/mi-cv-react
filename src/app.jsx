import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}
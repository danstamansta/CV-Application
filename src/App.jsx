import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'


export default function App() {
  return(
    <>
    <div>
      <GeneralInfo/>
      <Education/>
      <Experience/>
  
    </div>
      
    
    </>
    
  )}

  
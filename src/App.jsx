import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import dice from './assets/icon-dice.svg'
import divider from './assets/pattern-divider-mobile.svg'
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('')

  const getAdvice = async () => {
    const response = await axios("https://api.adviceslip.com/advice")
    console.log(response)
    setAdvice(response.data.slip)
  }
  useEffect (() => {
    getAdvice()
    
  },[]);

  return (
    <main> 
      <div className="App">
        <div className='card'>
          <div className='text-container'>
            <p className='advice'>ADVICE <span className='span'># {advice.id}</span></p>
            <p className='quote'>"{advice.advice}"</p>
          </div>
          <img src={divider} alt="patter-ndivider" className='divider'/>
          <div className='conatiner'>
          <button className='dice-button' onClick={getAdvice}>
            <img src = {dice} alt="dice-button" />
          </button>
           
        </div>
        </div>
      
         
      </div>
    </main>
    
  );
}

export default App;

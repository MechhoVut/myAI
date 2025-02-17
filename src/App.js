import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {

  const [question,setQuestion] = useState('');
  const [response,setResponse] = useState('');

  const submitHandler =(e)=>{
     e.preventDefault();
     console.log(question)
     axios.post('https://gemini-app-iota-two.vercel.app/getResponse',{
      question:question
     })
     .then(res=>{
      console.log(res.data.response);
      setResponse(res.data.response);
      setQuestion('');
     })
     .catch(err=>{
      console.log(err)
     })
  }
  const speakHandler =()=>{
    const a = new SpeechSynthesisUtterance(response);
    window.speechSynthesis.speak(a);
  }
  return (
    <div className="App">
    <div className='box'>
      <div className='profile-pic'>
      <img className='pic' alt='profile pic' src={require('../src/assets/user.jpg')}/>
      
      </div>
        <p className='label'> Chandan </p>
      <textarea value={question} onChange={(e)=>{setQuestion(e.target.value)}}/>
      <button onClick={submitHandler}> send </button>
    </div>
    <div className='box'>
    <div className='profile-pic'>
      <img className='pic' alt='profile pic' src={require('../src/assets/bhut.jpg')}/>

      </div>
      <p className='label'> Mechho Bhoot </p>
      <textarea value={response}/>
      <button onClick={speakHandler}> speak </button>
    
    </div>
      
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fb from "./img/fb.png"
import tw from "./img/tw.png"
import gl from "./img/g+.png"
const App = ({ players, selectedPlayerIndex }) => {
  return (
    <section className="container">
      <div className="text-center abc-game">
        <div className='text-left'><img className='btn-direction' src="img/right.svg" alt="" /></div>
        <div className='text-left'><img className='btn-direction' src="img/left.svg" onClick={() => { this.prev() }} alt="" /></div>
        <div>IMAGEN</div>
        <p className='text-left'>0 of 5 answered</p>

        <div className="bg-white text-center game">
          <h1>Preguntas</h1>
          <p>alternativas</p>
          <div className="social">
            <div className='circle'><img src={fb} alt="" /></div>
            <div className='circle'><img src={tw} alt="" /></div>
            <div className='circle'><img src={gl} alt="" /></div>
          </div>
        </div>

        <div className="bg-white text-center result"></div>
        <div className="bg-white text-center again"></div>
      </div>
    </section>
  );
}

export default App;

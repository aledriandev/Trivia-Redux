import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <section className="container">
      <div className="text-center abc-game">
        <div className='text-left'><img className='btn-direction' src="img/right.svg" alt="" /></div>
        <div className='text-left'><img className='btn-direction' src="img/left.svg" onClick={() => { this.prev() }} alt="" /></div>
        <div>{this.showImagen()}</div>
        <p className='text-left'>{this.state.count - 1} of 5 answered</p>

        <div className="bg-white text-center game">
          {this.state.init && this.showQuestions()}
          {this.state.complete && this.showAnswers()}
          {this.state.solution && <div>
            <h3>Respuestas correctas</h3>
            <h4>{this.state.answersCorrect.length} de 5</h4>
            {this.solution()}
            <button className='btn-quiz' onClick={(e) => { this.again(e) }}>Again</button>
          </div>}
          <div className="social">
            <div className='circle'><img src="img/fb.png" alt="" /></div>
            <div className='circle'><img src="img/tw.png" alt="" /></div>
            <div className='circle'><img src="img/g+.png" alt="" /></div>
          </div>
        </div>

        <div className="bg-white text-center result"></div>
        <div className="bg-white text-center again"></div>
      </div>
    </section>
  );
}

export default App;

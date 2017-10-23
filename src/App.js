import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fb from "./img/fb.png";
import tw from "./img/tw.png";
import gl from "./img/g+.png";
import { connect } from "redux-zero/react";
import {nextQz} from './actions';
import {} from 'react-bootstrap'

const Choices = ({ choices, next }) => {
  const letters = ['A', 'B', 'C'];
  return choices.map((choice, index) => {
    return (
      <div key={'a' + index} className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
        <button className='btn-question' onClick={()=>next(choice)}>
          <span className='letter'>{letters[index]}</span>
          <p>{choice}</p>
          <div className='div-check'></div>
          <div className='div-option'></div>
        </button>
      </div>);
  });
}
const Questions = ({ question, choices, next }) => {
  return (
    <div className="bg-white text-center game">
      <h3>{question}</h3>
      <div className="row text-center choices">
        <Choices choices={choices} next={next} />
      </div>
      <Social />
    </div>
  );
}

const Social = ({}) => {
  return (
    <div className="social">
      <div className='circle'><img src={fb} alt="" /></div>
      <div className='circle'><img src={tw} alt="" /></div>
      <div className='circle'><img src={gl} alt="" /></div>
    </div>
  );
}

const App = ({ questions, counter }) => {
  return (
    <section className="container">
      <div className="text-center abc-game">
        <div className='text-left'><img className='btn-direction' src="img/right.svg" alt="" /></div>
        <div className='text-left'><img className='btn-direction' src="img/left.svg" onClick={() => { this.prev() }} alt="" /></div>
        <div><img src={questions[counter].img} /></div>
        <p className='text-left'>{counter} of 5 answered</p>
        <Questions 
          question={questions[counter].question} 
          choices={questions[counter].choices} 
          next={nextQz}
        />
        <div className="bg-white text-center result"></div>
        <div className="bg-white text-center again"></div>
      </div>
    </section>
  );
}

const mapToProps = ({ questions, counter }) => ({ questions, counter });

export default connect(mapToProps)(App);

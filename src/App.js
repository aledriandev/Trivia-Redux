import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fb from "./img/fb.png";
import tw from "./img/tw.png";
import gl from "./img/g+.png";
import { connect } from "redux-zero/react";
import { nextQz } from './actions';
import { Row, Col } from 'react-bootstrap'

const Choices = ({ choices, next }) => {
  const letters = ['A', 'B', 'C'];
  return choices.map((choice, index) => {
    return (
      <Col key={'a' + index} lg={4} md={4} sm={6} xs={12}>
        <button className='btn-question' onClick={() => next(choice)}>
          <span className='letter'>{letters[index]}</span>
          <p>{choice}</p>
          <div className='div-check'></div>
          <div className='div-option'></div>
        </button>
      </Col>);
  });
}
const Questions = ({ question, choices, next }) => {
  return (
    <div className="bg-white text-center game">
      <h3>{question}</h3>
      <Row className="text-center choices">
        <Choices choices={choices} next={next} />
      </Row>
      <Social />
    </div>
  );
}

const Social = ({ }) => {
  return (
    <div className="social">
      <div className='circle'><img src={fb} alt="" /></div>
      <div className='circle'><img src={tw} alt="" /></div>
      <div className='circle'><img src={gl} alt="" /></div>
    </div>
  );
}


const Answers = ({ answers, questions }) => {
  answers = answers.map((answer, index) => {
    return (
      <div key={index}>
        <p><b>{questions[index].question}: </b>{answer}</p>
      </div>
    );
  });
  return (
    <div>
      <h3>Here are you answers:</h3>
      {answers}
      <button className='btn-quiz' onClick={e => this.showSolution(e)}>Submit</button>
    </div>
  );
}

const App = ({ questions, counter, answers }) => {
  return (
    <section className="container">
      <div className="text-center abc-game">
        <div className='text-left'><img className='btn-direction' src="img/right.svg" alt="" /></div>
        <div className='text-left'><img className='btn-direction' src="img/left.svg" onClick={() => { this.prev() }} alt="" /></div>
        <div><img src={questions[counter].img} /></div>
        <p className='text-left'>{counter} of 5 answered</p>
        {
          counter < 5
          &&
          <Questions
            question={questions[counter].question}
            choices={questions[counter].choices}
            next={nextQz}
          />
        }
        {
          counter == 5
          &&
          <div className="bg-white text-center result">
            <Answers answers={answers} questions={questions}/>
          </div>
        }
        <div className="bg-white text-center again"></div>
      </div>
    </section>
  );
}

const mapToProps = ({ questions, counter, answers }) => ({ questions, counter, answers });

export default connect(mapToProps)(App);

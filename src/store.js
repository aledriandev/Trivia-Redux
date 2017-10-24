import createStore from "redux-zero";
// import img1 from './img/1.svg';
// import img2 from './img/2.svg';
// import img3 from './img/3.svg';
// import img4 from './img/4.svg';
// import img5 from './img/5.svg';
// import img6 from './img/6.svg';


function Questions (img,question, correct, wrong1,wrong2){
    this.img = img;
    this.question = question;
    this.choices = [ correct, wrong1, wrong2];
}

const allQuestions = [
    new Questions ('https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg',
                    'Which is the oldest airline in the world?','KLM', 'Abianca', 'Qantas'),
    new Questions ('https://ihatetomatoes.net/react-tutorials/abc-quiz/images/ship.svg',
                    'Which is the largest port in the world?','Port of Shanghai', 'Port de Singapore', 'Port of Rotterdam'),
    new Questions ('https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bycicle.svg',
                    'What is the longest distance cycling backwards?','337.60 Km', '89.30 Km', '675.10 Km'),
    new Questions ('https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bus.svg',
                    'What is the highest speed ever reached by a school bus?','590 Km/h', '320 Km/h', '245 Km/h'),
    new Questions ('https://ihatetomatoes.net/react-tutorials/abc-quiz/images/car.svg',
                    'What is the longest car trip on one tank of gas?','2617 Km', '3568 Km', '1732 Km'),
    new Questions ('https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/truck.svg')
]

const initialState = {
    counter: 0,
    questions: allQuestions,
    answers: [],
    answersCorrect: [],
    complete: false,
    solution: false,
    init: true
};

const store = createStore(initialState);

export default store;

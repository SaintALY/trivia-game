import React, { useState } from 'react';
import './App.css';
import Question from "./components/Question";

function App() {
  const [questData, setQuestData] = useState([]);
  const [questions, setQuestions] = useState(allNewQuestions());

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then(res => res.json())
      .then(data => setQuestData(data.results));
    setQuestions(allNewQuestions());
  }, []);

  function allNewQuestions() {
    const questionArray = [];
    for (let i = 0; i < questData.length; i++) {
      questionArray.push({
        key: i,
        category: questData[i].category,
        difficulty: questData[i].difficulty,
        correct_answer: questData[i].correct_answer,
        incorrect_answers: questData[i].incorrect_answers,
        question: questData[i].question
      });
    }
    return questionArray;
  }

  const allAnswers = questions.incorrect_answers.concat(questions.correct_answer);

  function checkAnswers() {
    console.log("check answers");
  }

  const questionElements = questions.map(quest => <Question 
    key={quest.key}
    category={quest.category}
    difficulty={quest.difficulty}
    correct_answer={quest.correct_answer}
    incorrect_answers={quest.incorrect_answers}
    question={quest.question}
    allAnswers={allAnswers} />)

  return (
    <div className="App">
      <main>
        <div className='question-box'>
          {questionElements}
        </div>
        <div className='check-box'>
          <button className='check-answer' onClick={checkAnswers}>Check Answers</button>
        </div>
      </main>
    </div>
  );
}

export default App;

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
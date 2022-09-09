import React, { useState } from 'react';
import './App.css';
import Question from "./components/Question";
import {nanoid} from "nanoid"

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
        id: nanoid(),
        category: questData[i].category,
        difficulty: questData[i].difficulty,
        question: questData[i].question,
        answer_0: {id: 0, value: questData[i].incorrect_answers[0], correct: false, selected: false},
        answer_1: {id: 1, value: questData[i].incorrect_answers[1], correct: false, selected: false},
        answer_2: {id: 2, value: questData[i].incorrect_answers[2], correct: false, selected: false},
        answer_3: {id: 3, value: questData[i].correct_answer, correct: true, selected: false},
        answers: [{AId: 0, value: questData[i].incorrect_answers[0], correct: false, selected: false},
                 {AId: 1, value: questData[i].incorrect_answers[1], correct: false, selected: false},
                  {AId: 2, value: questData[i].incorrect_answers[2], correct: false, selected: false},
                  {AId: 3, value: questData[i].correct_answer, correct: true, selected: false}]
      });
    }
    return questionArray;
  }

  function generateQuestions() {
    console.log("check answers");
    setQuestions(allNewQuestions());
  }

  // TODO: FIX THIS
  function markAnswer_0(id) { 
    console.log("A0", id);
    questions.map(question => {
      if (question.id === id) {
        setQuestions(prevQuestions => question.answer_0.selected = true);
      }});
  }

  function markAnswer_1(id) {
    console.log("A1", id);
  }

  function markAnswer_2(id) {
    console.log("A2", id);
  }

  function markAnswer_3(id) {
    console.log("A3", id);
  }

  const questionElements = questions.map(quest => <Question 
                                          key={quest.id}
                                          category={quest.category}
                                          difficulty={quest.difficulty}
                                          answer_0={quest.answer_0}
                                          answer_1={quest.answer_1}
                                          answer_2={quest.answer_2}
                                          answer_3={quest.answer_3}
                                          question={quest.question}
                                          answers={quest.answers}
                                          markAnswer_0={() => markAnswer_0(quest.id)}
                                          markAnswer_1={() => markAnswer_1(quest.id)}
                                          markAnswer_2={() => markAnswer_2(quest.id)}
                                          markAnswer_3={() => markAnswer_3(quest.id)}
                                        />)

  return (
    <div className="App">
      <main>
        <div className='question-box'>
          {questionElements}
        </div>
        <div className='check-box'>
          <button className='check-answer' onClick={generateQuestions}>Genereate Question</button>
        </div>
      </main>
    </div>
  );
}

export default App;

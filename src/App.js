import React, { useState } from 'react';
import './App.css';
import Question from "./components/Question";
import {nanoid} from "nanoid"

function App() {
  const [questData, setQuestData] = useState([]);
  const [questions, setQuestions] = useState(allNewQuestions());
  const [winner, setWinner] = useState(false);
  const [checkWinner, setCheckWinner] = useState(false);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then(res => res.json())
      .then(data => setQuestData(data.results));
    setQuestions(allNewQuestions());
  }, []);

  React.useEffect(() => {
    console.log(questions);
    setQuestions(questions.map(question => {
      if (question.answer_0.selected === question.answer_0.correct || question.answer_1.selected === question.answer_1.correct || question.answer_2.selected === question.answer_2.correct || question.answer_3.selected === question.answer_3.correct) {
        return {
          ...question,
          answered: true
        }
      } else {
        return question;
      }
      }));
  }, [checkWinner]);

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
        answered: false
        // answers: [{AId: 0, value: questData[i].incorrect_answers[0], correct: false, selected: false},
        //          {AId: 1, value: questData[i].incorrect_answers[1], correct: false, selected: false},
        //           {AId: 2, value: questData[i].incorrect_answers[2], correct: false, selected: false},
        //           {AId: 3, value: questData[i].correct_answer, correct: true, selected: false}]
      });
    }
    return questionArray;
  }

  function generateQuestions() {
    console.log("check answers");
    setQuestions(allNewQuestions());
  }

  // TODO: re-write the hard coded answers to be dynamic and make use of the answers array
  function markAnswer_0(id) { 
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ? 
        {...question, answer_0: {id: 0, value: question.answer_0.value, correct: question.answer_0.correct, selected: true}} : question;
    }));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_1: {id: 1, value: question.answer_1.value, correct: question.answer_1.correct, selected: false}} : question;
      }));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_2: {id: 2, value: question.answer_2.value, correct: question.answer_2.correct, selected: false}} : question;
      }));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_3: {id: 3, value: question.answer_3.value, correct: question.answer_3.correct, selected: false}} : question;
      }));
  }

  function markAnswer_1(id) {
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ? 
        {...question, answer_1: {id: 1, value: question.answer_1.value, correct: question.answer_1.correct, selected: true}} : question;
    }));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_0: {id: 0, value: question.answer_0.value, correct: question.answer_0.correct, selected: false}} : question;
      }));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_2: {id: 2, value: question.answer_2.value, correct: question.answer_2.correct, selected: false}} : question;
      }));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_3: {id: 3, value: question.answer_3.value, correct: question.answer_3.correct, selected: false}} : question;
      }));
  }

  function markAnswer_2(id) {
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ? 
        {...question, answer_2: {id: 2, value: question.answer_2.value, correct: question.answer_2.correct, selected: true}} : question;
    }));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_0: {id: 0, value: question.answer_0.value, correct: question.answer_0.correct, selected: false}} : question;
      }
    ));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_1: {id: 1, value: question.answer_1.value, correct: question.answer_1.correct, selected: false}} : question;
      }
    ));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_3: {id: 3, value: question.answer_3.value, correct: question.answer_3.correct, selected: false}} : question;
      }
    ));
  }

  function markAnswer_3(id) {
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ? 
        {...question, answer_3: {id: 3, value: question.answer_3.value, correct: question.answer_3.correct, selected: true}} : question;
    }));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_0: {id: 0, value: question.answer_0.value, correct: question.answer_0.correct, selected: false}} : question;
      }
    ));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_1: {id: 1, value: question.answer_1.value, correct: question.answer_1.correct, selected: false}} : question;
      }
    ));
    setQuestions(oldQuestions => oldQuestions.map(question => {
      return question.id === id ?
        {...question, answer_2: {id: 2, value: question.answer_2.value, correct: question.answer_2.correct, selected: false}} : question;
      }
    ));
  }

  function checkAnswers() {
    console.log("check answers");
    setCheckWinner(!checkWinner);
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
                                          answered={quest.answered}
                                          // answers={quest.answers}
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
          <button className='check-answer' onClick={checkAnswers}>Check Answers</button>
        </div>
      </main>
    </div>
  );
}

export default App;

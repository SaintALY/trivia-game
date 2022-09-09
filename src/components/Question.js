import React from "react";
import '../App.css';

function Question() {
  return (
  <div className="question">
    <div>
        <h2>Question</h2>
    </div>
    
    <div className="answers">
        <div className="answer-button">Answer 1</div>
        <div className="answer-button">Answer 2</div>
        <div className="answer-button">Answer 3</div>
        <div className="answer-button">Answer 4</div>
    </div>
  </div>
);}

export default Question;
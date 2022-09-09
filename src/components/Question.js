import React from "react";
import '../App.css';

function Question(props) {
    console.log(props);

    
    function cleanText(text) {
        const regex = /&#039;/g;
        const quotes = /&quot;/g;

        text = text.replace(quotes, '"');
        return text.replace(regex, "'");
    }

    const answers = props.incorrect_answers.concat(props.correct_answer);
    const answerElements = answers.map(answer => <div className="answer-button">{cleanText(answer)}</div>);

    const cleanQuestion = cleanText(props.question);

  return (
  <div className="question">
    <div>
        <h2>{cleanQuestion}</h2>
    </div>
    
    <div className="answers">
        {answerElements}
    </div>
  </div>
);}

export default Question;
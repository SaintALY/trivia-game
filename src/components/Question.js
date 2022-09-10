import React from "react";
import '../App.css';

function Question(props) {
    // console.log(props);
  
    function cleanText(text) {
        const regex = /&#039;/g;
        const quotes = /&quot;/g;
        const eacute = /&eacute;/g;
        const amp = /&amp;/g;

        text = text.replace(amp, "&");
        text = text.replace(quotes, '"');
        text = text.replace(eacute, 'é');
        return text.replace(regex, "'");
    }

    const styles_0 = {
        backgroundColor: props.answer_0.selected ? "#D6DBF5" : "white"
    }
    const styles_1 = {
        backgroundColor: props.answer_1.selected ? "#D6DBF5" : "white"
    }
    const styles_2 = {
        backgroundColor: props.answer_2.selected ? "#D6DBF5" : "white"
    }
    const styles_3 = {
        backgroundColor: props.answer_3.selected ? "#D6DBF5" : "white"
    }

    // TRY TO RENDER FROM ARRAY, HAVENt FIGUtRED OUT HOW TO DO PASS ANSWER ID
    // const answersElement = props.answers.map(answer => <div 
    //                                         className="answer-button" 
    //                                         style={styles} 
    //                                         onClick={props.markAnswer}>{cleanText(answer.value)}</div>)

  return (
  <div className="question">
    <div>
        <h2>{cleanText(props.question)}</h2>
    </div>
    
    <div className="answers">
        {/* {answersElement} */}
        <div className="answer-button" style={styles_0} onClick={props.markAnswer_0}>{cleanText(props.answer_0.value)}</div>
        <div className="answer-button" style={styles_1} onClick={props.markAnswer_1}>{cleanText(props.answer_1.value)}</div>
        <div className="answer-button" style={styles_2} onClick={props.markAnswer_2}>{cleanText(props.answer_2.value)}</div>
        <div className="answer-button" style={styles_3} onClick={props.markAnswer_3}>{cleanText(props.answer_3.value)}</div>
    </div>
  </div>
);}

export default Question;
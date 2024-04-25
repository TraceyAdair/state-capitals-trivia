// import { useState } from "react";
// import { resultInitialState } from "./stateQuestionArray";

// const CapitalQuestion = ({ questions }) => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [answerIdx, setAnswerIdx] = useState(null);
//     const [answer, setAnswer] = useState(null);
//     const [result, setResult] = useState(resultInitialState);
//     const [showResult, setShowResult] = useState(false);
//     const [feedbacks, setFeedbacks] = useState(Array.from({ length: questions.length }, () => null)); // New state for feedbacks

//     const { question, choices, correctAnswer } = questions[currentQuestion];

//     const onAnswerClick = (choice, index) => {
//         setAnswerIdx(index);
//         if (choice === correctAnswer) {
//             setAnswer(true);
//             setFeedbacks((prev) => {
//                 const updatedFeedbacks = [...prev];
//                 updatedFeedbacks[currentQuestion] = "Correct!";
//                 return updatedFeedbacks;
//             });
//         } else {
//             setAnswer(false);
//             setFeedbacks((prev) => {
//                 const updatedFeedbacks = [...prev];
//                 updatedFeedbacks[currentQuestion] = "Incorrect!";
//                 return updatedFeedbacks;
//             });
//         }
//     };

//     const onClickPrev = () => {
//         setAnswerIdx(null);
//         setCurrentQuestion((prev) => prev - 1);
//     };

//     const onClickNext = () => {
//         setAnswerIdx(null);
//         setFeedbacks((prev) => {
//             const updatedFeedbacks = [...prev];
//             updatedFeedbacks[currentQuestion] = null; // Reset feedback for current question
//             return updatedFeedbacks;
//         });
//         setResult((prev) =>
//             answer
//                 ? {
//                       ...prev,
//                       score: prev.score + 1,
//                       correctAnswers: prev.correctAnswers + 1 // Increment correctAnswers for score calculation
//                   }
//                 : {
//                       ...prev,
//                       wrongAnswers: prev.wrongAnswers + 1
//                   }
//         );

//         if (currentQuestion !== questions.length - 1) {
//             setCurrentQuestion((prev) => prev + 1);
//         } else {
//             setShowResult(true);
//         }
//     };

//     const onTryAgain = () => {
//         setResult(resultInitialState);
//         setFeedbacks(Array.from({ length: questions.length }, () => null)); // Reset feedbacks for all questions
//         setShowResult(false);
//         setCurrentQuestion(0);
//     };

//     return (
//         <div className="quiz-container">
//             {!showResult ? (
//                 <>
//                     <p></p>
//                     <span className="active-question-no">{currentQuestion + 1}</span>
//                     <span className="total-question">/{questions.length}</span>
//                     <h3>What is the state capital of _____?</h3>
//                     <h2>{question}</h2>
//                     <ul>
//                         {choices.map((choice, index) => (
//                             <li
//                                 onClick={() => onAnswerClick(choice, index)}
//                                 key={choice}
//                                 className={
//                                     answerIdx === index
//                                         ? choice === correctAnswer
//                                             ? "selected-answer correct"
//                                             : "selected-answer incorrect"
//                                         : "selected-answer"
//                                 }
//                             >
//                                 {choice}
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="feedback">{feedbacks[currentQuestion]}</div> {/* Display feedback for current question */}
//                     <div className="footer">
//                         <button disabled={currentQuestion < 1} onClick={onClickPrev}>
//                             Previous
//                         </button>
//                         <button onClick={onClickNext} disabled={answerIdx === null}>
//                             {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
//                         </button>
//                     </div>
//                 </>
//             ) : (
//                 <div className="result">
//                     <h3>Result</h3>
//                     <p>
//                         Total Questions: <span>{questions.length}</span>
//                     </p>
//                     <p>
//                         Correct Answers: <span>{result.correctAnswers}</span>
//                     </p>
//                     <button onClick={onTryAgain}>Try Again</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CapitalQuestion;

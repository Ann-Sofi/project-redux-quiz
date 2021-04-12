import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = (/* { handleNextQuestion } */) => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver);
  /*  const questions = useSelector((state) => state.quiz.questions) */
  console.log(quizOver);
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  } 
    const onButtonClick = (option, index) => {
      /* handleNextQuestion(true) */
      dispatch(quiz.actions.submitAnswer(
        { questionId: question.id, answerIndex: index }
      ))
      dispatch(quiz.actions.goToNextQuestion())
    }

  return (

    <div>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((option, index) => (
          <button
            // disabled={buttonStatus}
            questionId={question.id}
            index={index}
            option={option}
            correctIndex={question.correctAnswerIndex}
            onClick={() => onButtonClick(option, index)}
            type="button">
            {option}
          </button>))}
      </div>
    </div>
  )}
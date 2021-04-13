/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz} from '../reducers/quiz'

export const Summary = () => {

    const dispatch = useDispatch()
    const answers = useSelector(
      (state) => state.quiz.answers
    )
    const correctAnswers = answers.filter(answer => answer.isCorrect).length
    const numOfAnswers = answers.length

    return (
        <div className="summary-container">
          <div>
            {correctAnswers < 3 && (
              <p>Sorry!!</p>
            )}
            {correctAnswers >= 3 && (
              <p>Yay!</p>
            )}
            <p>You got {correctAnswers} right answer/s out of {numOfAnswers}</p>
          </div>
          <div className="button-container">
            <button
              className="restart-button"
              onClick={() => dispatch(quiz.actions.restart())}
            >
              Quiz again
            </button>
          </div>
        </div>
    )
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    QuizContainer,
    QuizQuestionsContainer,
    QuizText,
    QuizAnswer,
    QuizAnswerContainer,
    ResultIcons,
    QuizIcons,
} from "../styled-components/quizStyle";
import { storage } from "../firebase";
import { updateIconsArr, updateResults } from "../store/quizSlice";
import Results from "./Results";
import firebase from "firebase/app";

function Quiz() {

    const quiz = useSelector(state => state.quiz.questions);
    const icons = useSelector(state => state.quiz.iconsArr)

    const dispatch = useDispatch()

    const [quizQuestion, setQuizQuestion] = useState(quiz[0])

    const [checkIcon, setCheckIcon] = useState('')
    const [falseIcon, setFalseIcon] = useState('')
    const [counter, setCounter] = useState(0)

    const [finish, setFinish] = useState(false)

    storage.ref().child('images/checkIcon.png').getDownloadURL()
        .then((url) => {
            setCheckIcon(url)
        })
    storage.ref().child('images/falseIcon.png').getDownloadURL()
        .then((url) => {
            setFalseIcon(url)
        })

    const handleClick = (answer) => {
        const index = quiz.indexOf(quizQuestion)
        if (answer.right) {
            dispatch(updateIconsArr({ url: checkIcon, index: index }))
            setCounter(prevCounter => prevCounter + 1)
        } else {
            dispatch(updateIconsArr({ url: falseIcon, index: index }))
        }
        if (index < 2) {
            setQuizQuestion(quiz[index + 1])
        } else {
            setTimeout(() => {
                dispatch(updateResults({
                    user: firebase.auth().currentUser.uid,
                    photoURL: firebase.auth().currentUser.photoURL,
                    displayName: firebase.auth().currentUser.displayName,
                    counter: counter
                })) 
                    setFinish(true)
            }, 1000)
        }
    }


    return (
        <>
            {finish && <Results />}
            {finish === false && <QuizContainer>
                <ResultIcons>
                    {icons.map(icon => <QuizIcons src={icon.url} key={icon.index} />)}
                </ResultIcons>
                <QuizQuestionsContainer>
                    <QuizText>{quizQuestion.question}</QuizText>
                    <QuizAnswerContainer>
                        <QuizAnswer onClick={() => handleClick(quizQuestion.answer1)}>{quizQuestion.answer1.text}</QuizAnswer>
                        <QuizAnswer onClick={() => handleClick(quizQuestion.answer2)}>{quizQuestion.answer2.text}</QuizAnswer>
                        <QuizAnswer onClick={() => handleClick(quizQuestion.answer3)}>{quizQuestion.answer3.text}</QuizAnswer>
                        <QuizAnswer onClick={() => handleClick(quizQuestion.answer4)}>{quizQuestion.answer4.text}</QuizAnswer>
                    </QuizAnswerContainer>
                </QuizQuestionsContainer>
            </QuizContainer>}
        </>
    )
}

export default Quiz 
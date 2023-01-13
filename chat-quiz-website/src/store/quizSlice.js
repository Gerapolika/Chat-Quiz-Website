import { createSlice } from '@reduxjs/toolkit';

import { storeDB } from '../firebase';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        user: {},
        error: '',
        questions: [],
        iconsArr: [],
    },
    reducers: {
        startQuiz(state, acion) {
            state.user = {
                user: acion.payload.user,
                userReadiness : true
            }
            storeDB.collection("users").doc(acion.payload.user).set({
                user: acion.payload.user,
                userReadiness : true
            })
        },

        cancelStartQuiz(state, action) {
            state.user = {
                user: action.payload.user,
                userReadiness : false
            }
            storeDB.collection("users").doc(action.payload.user).set({
                user: action.payload.user,
                userReadiness : false
            })
        },

        getDataQuiz(state, action) {
            state.questions = action.payload.quiz
        },

        setErrorQuiz(state, action) {
            state.error = action.payload.error
            console.log(state.error)
        },
        updateIconsArr(state, action) {
            state.iconsArr.push({
                url: action.payload.url,
                index: action.payload.index
            })
        }
    }
})

export const { startQuiz, cancelStartQuiz, getDataQuiz, setErrorQuiz, updateIconsArr } = quizSlice.actions;
export default quizSlice.reducer;
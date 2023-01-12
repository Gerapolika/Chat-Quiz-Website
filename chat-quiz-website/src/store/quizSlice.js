import { createSlice } from '@reduxjs/toolkit';

import { storeDB } from '../firebase';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        user: {},
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
        cancelStartQuiz(state, acion) {
            state.user = {
                user: acion.payload.user,
                userReadiness : false
            }
            storeDB.collection("users").doc(acion.payload.user).set({
                user: acion.payload.user,
                userReadiness : false
            })
        },
    }
})

export const { startQuiz, cancelStartQuiz } = quizSlice.actions;
export default quizSlice.reducer;
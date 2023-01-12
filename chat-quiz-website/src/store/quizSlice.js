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

    }
})

export const { startQuiz } = quizSlice.actions;
export default quizSlice.reducer;
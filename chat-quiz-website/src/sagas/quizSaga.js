import { call, put } from 'redux-saga/effects'
import { database } from '../firebase'
import { getDataQuiz, setErrorQuiz } from '../store/quizSlice';

function* fetchQuiz() {
    try {
        var quizRef = database.ref('quiz/');
        var quiz = yield call(function () {
            return new Promise(function (resolve) {
                quizRef.on('value', (snapshot) => {
                    var data = snapshot.val()
                    resolve(data !== null ? data : [])
                })
            })
        })
        yield put(getDataQuiz({quiz: quiz}))
    }

    catch (error) {
        yield put(setErrorQuiz({error: "Error loading Messages collection data from Realtime Database"}));
    }
}


  

export  {fetchQuiz}
import React from "react";
import { QuizContainer, QuizStartText, QuizCancelButton} from "../styled-components/quizStyle";


function ReadyForQuiz() {

    return(
    <QuizContainer>
      <QuizStartText>
        Ready to start The Quiz
      </QuizStartText>
      <QuizCancelButton>
        CANCEL
      </QuizCancelButton>
    </QuizContainer>
    )
}

export default ReadyForQuiz
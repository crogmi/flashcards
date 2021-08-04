import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice ({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
            console.log(state.quizzes[id]);
        },
        addQuizForTopicId: (payload) => {
            return (dispatch) => {
                // Need to review how to call the dispatch - currently not dispatching correctly
                dispatch({type: "quizzes/addQuiz", payload: payload});
                dispatch(addQuizId(payload));
            };
        }
    }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz, addQuizForTopicId } = quizzesSlice.actions;
export default quizzesSlice.reducer;
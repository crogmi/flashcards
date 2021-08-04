import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice ({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        // Start tomorrow from task 11 in the assignment
        addQuizId: (state, action) => {

        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
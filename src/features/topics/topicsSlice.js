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
        addQuizId: (state, action) => {
            const {id, topicId} = action.payload;
            state.topics.find(id => id === topicId).quizIds.push(id);
        }
    }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
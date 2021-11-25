
import { createSlice } from "@reduxjs/toolkit";
// import Topics from "./Topics";
// import Quizzes from "../quizzes/Quizzes";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
      addTopic(state,action){
        const {id,name,icon} = action.payload
            state.topics[id]= {
              id:id,
              name:name,
              icon:icon,
              quizIds: []
            }

      },
  
      addQuizId(state,action){
        const {quizId,topicId} = action.payload
        state.topics[topicId].quizIds.push(quizId)
      }
      

    }
  });
  console.log(topicsSlice)
  export const { addTopic , addQuizId} = topicsSlice.actions
  export const topicsReducer = topicsSlice.reducer
  export const selectTopic = state => state.topics.topics
  

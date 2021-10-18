import { configureStore } from "@reduxjs/toolkit";
// import Topics from "../features/topics/Topics";
import { topicsReducer } from "../features/topics/topicSlice";
import { quizzesReducer } from "../features/quizzes/quizzesSlice";
import { cardReducer } from "../features/quizzes/cardSlice";

export default configureStore({
  reducer: {
   topics:topicsReducer,
   quizzes: quizzesReducer,
   cards:cardReducer
  },
});

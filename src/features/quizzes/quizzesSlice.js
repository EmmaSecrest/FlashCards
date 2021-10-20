import { createSlice} from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import { addQuizId } from "../topics/topicSlice";
// const dispatch = useDispatch;

const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes:{}},
    reducers: {
        addQuiz(state,action){
            const {id,name,topicId,cardIds} = action.payload
            state.quizzes[id] = {
                id: id,
                name:name,
                topicId:topicId,
                cardIds: cardIds
            }

        }
    }
})
// async thunk for dispatching the new quiz
const createTopicQuiz = (payload) =>{
    const {id,name,topicId,cardIds} = payload
    
    return (dispatch) => {
        dispatch(addQuizId({topicId}))
        dispatch(addQuiz({id,name,topicId,cardIds}))
        
    }
}


export const topicQuizDispatch = createTopicQuiz;
export const {addQuiz} = quizSlice.actions;
export const quizzesReducer = quizSlice.reducer;
export const selectQuiz = state => state.quizzes.quizzes

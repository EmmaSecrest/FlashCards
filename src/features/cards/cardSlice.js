import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {cards:{}},
    reducers: {
        addCards(state,action){
            const {id,front,back} = action.payload;
            state.cards[id] = {
                id:id,
                front:front,
                back:back
            }
        }
    }
})

export const {addCards} = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
export const selectCards = state => state.cards.cards;
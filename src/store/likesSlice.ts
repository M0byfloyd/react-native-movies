import {createSlice} from "@reduxjs/toolkit";


export const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        liked: <Array<number>>[]
    },
    reducers: {
        toggleMoviesToLike(state, action) {
            if (state.liked.includes(action.payload)) {
                state.liked.splice(state.liked.findIndex(x => x === action.payload), 1)
            } else {
                state.liked.push(action.payload)
            }
        },
    }
});


export const {toggleMoviesToLike} = likesSlice.actions;
export default likesSlice.reducer;
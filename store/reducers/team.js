import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    team: []
}

const team = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeam(state, action){
            state.team = action.payload;
        },
    }
})


export const {
    setTeam
} = team.actions;

export default team.reducer

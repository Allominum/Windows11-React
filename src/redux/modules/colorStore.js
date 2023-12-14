
import { createSlice } from '@reduxjs/toolkit'

const colorStore = createSlice({
    name: "colorStore",
    
    initialState: {
        dominColor: "#ad6eca",
        seconColor: "#3b91d8",
    },

    reducers: {
        setDominColor(state,action) {
            state.dominColor = action.payload;
            document.getElementById("frameelement-main").style.setProperty(`--dominColor`, action.payload);
        },

        setSeconColor(state,action) {
            state.seconColor = action.payload;
            document.getElementById("frameelement-main").style.setProperty(`--seconColor`, action.payload);
        },

        resetDominColor(state) {
            state.dominColor = "#ad6eca";
            document.getElementById("frameelement-main").style.setProperty(`--dominColor`, "#ad6eca");
        },

        resetSeconColor(state) {
            state.seconColor = "#3b91d8";
            document.getElementById("frameelement-main").style.setProperty(`--seconColor`, "#3b91d8");
        }
    }
});

const colorReducer = colorStore.reducer
const { setDominColor, setSeconColor, resetDominColor, resetSeconColor } = colorStore.actions

export default colorReducer
export { setDominColor, setSeconColor, resetDominColor, resetSeconColor }
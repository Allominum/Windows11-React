
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
            document.body.style.setProperty(`--dominColor`, action.payload);
        },

        setSeconColor(state,action) {
            state.seconColor = action.payload;
            document.body.style.setProperty(`--seconColor`, action.payload);
        },

        resetDominColor(state) {
            state.dominColor = "#ad6eca";
            document.body.style.setProperty(`--dominColor`, "#ad6eca");
        },

        resetSeconColor(state) {
            state.seconColor = "#3b91d8";
            document.body.style.setProperty(`--seconColor`, "#3b91d8");
        }
    }
});

const colorReducer = colorStore.reducer
const { setDominColor, setSeconColor, resetDominColor, resetSeconColor } = colorStore.actions

export default colorReducer
export { setDominColor, setSeconColor, resetDominColor, resetSeconColor }
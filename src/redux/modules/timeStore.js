
import { createSlice } from '@reduxjs/toolkit'

const timeStore = createSlice({
    name: "timeStore",
    
    initialState: {
        
    },

    reducers: {
        setOpacity(state,action) {
            state.opacity = action.payload;
        },

        
    }
});

const timeReducer = timeStore.reducer
const {  } = timeStore.actions

export default timeReducer
export {  }
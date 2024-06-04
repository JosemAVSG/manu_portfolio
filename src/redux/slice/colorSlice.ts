import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    background: 'black',
    index: 0,
    colors: ['black','yellow','white','gray'],
};

const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setColor: (state, action) => {
            console.log(action.payload);
            
            return { ...state, background: action.payload };
        },
    },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
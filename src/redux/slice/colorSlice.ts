import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    background: 'black',
};

const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setColor: (state, action) => {
            return { ...state, background: action.payload };
        },
    },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
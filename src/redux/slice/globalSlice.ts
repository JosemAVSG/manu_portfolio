import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

const initialState = {
    background: 'black',
    opendropdown: false,
    projects: [],
    loading: false,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setColor: (state, action) => {
            return { ...state, background: action.payload };
        },

        setOpenDropdown: (state, action) => {
            return { ...state, opendropdown: action.payload };
        },

        setProjects: (state, action) => {
            return { ...state, projects: action.payload };
        },
        setLoading: (state, action) => {
            return { ...state, loading: action.payload };
        },

    },
});


export const getProjectsAction = (): AppThunk => {

    return async (dispatch) => {
        try{

            const data = await fetch('products.json');
            const projects = await data.json();
            
            
            dispatch(setProjects(projects.projects));
            dispatch(setLoading(false));
        }
        catch(error){
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}




export const { setColor, setOpenDropdown, setProjects, setLoading } = globalSlice.actions;
export default globalSlice.reducer;
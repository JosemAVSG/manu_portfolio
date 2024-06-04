import { configureStore ,Action,ThunkAction } from "@reduxjs/toolkit";
import colorSlice from "./slice/colorSlice"


const store = configureStore({
    reducer: {
        color: colorSlice
    },
});

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
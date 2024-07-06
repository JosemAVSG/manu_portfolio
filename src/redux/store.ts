import { configureStore ,Action,ThunkAction } from "@reduxjs/toolkit";
import globalSlice from "./slice/globalSlice"


const store = configureStore({
    reducer: {
        globalSlice: globalSlice
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
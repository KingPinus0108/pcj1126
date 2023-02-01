import { configureStore } from '@reduxjs/toolkit'
import compilerReducer from "./slices/compiler";

const reducer = {
  compiler: compilerReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;

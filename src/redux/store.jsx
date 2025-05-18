import { configureStore } from '@reduxjs/toolkit';
import reducersDummy from './DummySlice';
export const store=configureStore({
reducer:{babu:reducersDummy}
})
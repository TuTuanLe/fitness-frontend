import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from '../Reducers/projectSlice';
import counterSlice from '../Reducers/counterSlice';
export const store = configureStore({
  reducer: {
    project: ProjectSlice,
  },
});

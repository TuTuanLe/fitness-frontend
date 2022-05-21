import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from '../Reducers/projectSlice';
export const store = configureStore({
  reducer: {
    project: ProjectSlice,
  },
});

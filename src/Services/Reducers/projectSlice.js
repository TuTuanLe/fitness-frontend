import { createSlice } from '@reduxjs/toolkit';
export const ProjectSlice = createSlice({
  name: 'Projects',
  initialState: {
    projects: [],
    appError: '',
    loading: true,
  },
  reducers: {
    load_data: (state) => {
      state.loading = true;
    },
    fetch_project: (state) => {
      state.loading = false;
      state.projects = [
        {
          id: '1',
          name: 'CLONE X - X TAKASHI MURAKAMI',
          des: 'RTFKTCLONEXTM',
          count: 'D-19',
          partner: '8.9천',
          total: '176억 원',
        },
        {
          id: '2',
          name: 'Ukraine response',
          des: 'unicef',
          count: 'D-19',
          partner: '124.9만',
          total: '73억 원',
        },
        {
          id: '3',
          name: 'BEANZ Official',
          des: 'beanzofficial',
          count: '19.9천',
          partner: '6.7천',
          total: '25.8억 원',
        },
        {
          id: '4',
          name: 'Murakami.Flowers Seed',
          des: ' MFTMKKUS',
          count: '74',
          partner: '1643',
          total: '8411만 원',
        },
        {
          id: '5',
          name: 'Murakami.Flowers Seed',
          des: ' MFTMKKUS',
          count: '2914',
          partner: '6.4천',
          total: '611만 원',
        },
        {
          id: '6',
          name: 'Murakami.Flowers Seed',
          des: ' MFTMKKUS',
          count: '2914',
          partner: '6.4천',
          total: '611만 원',
        },
      ];
    },
    on_error: (state, action) => {
      projects: [...state, action.payload];
      state.loading = false;
    },
  },
});

export const { load_data, fetch_project, on_error } = ProjectSlice.actions;

export default ProjectSlice.reducer;

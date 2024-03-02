import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    filter: null,
    filterMedicineByShop: [],
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterSet(state, { payload }) {
            state.filter = payload;
        },
        filterDelete(state, { payload }) {
            state.filter = null;
        },
        filterMedicineByShopSet(state, { payload }) {
            state.filterMedicineByShop = payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { filterSet, filterDelete, filterMedicineByShopSet} = filterSlice.actions;

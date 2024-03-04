import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    sort: null,
    filterMedicineByShop: [],
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        sortSet(state, { payload }) {
            state.sort = payload;
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

export const { sortSet, filterDelete, filterMedicineByShopSet} = filterSlice.actions;

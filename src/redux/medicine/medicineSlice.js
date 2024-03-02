import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { makeUniqueBrandsState } from 'service/serviceFunc';
import { getAllMedicinesThunk } from './medicineThanks';

const medicinesInitialState = {
    allMedicines: [],
    medicinesByShop: [],
    isLoading: false,
    error: null,
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const arrOfActs = [
    getAllMedicinesThunk,
];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

const medicinesSlice = createSlice({
    name: 'medicines',
    initialState: medicinesInitialState,
    extraReducers: builder => {
        builder
            .addCase(getAllMedicinesThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allMedicines = payload;
                // state.carsBrands = makeUniqueBrandsState(payload);
                state.error = null;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});

export const medicinesReducer = medicinesSlice.reducer;

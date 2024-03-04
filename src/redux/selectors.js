// ------------------ medicines ---------------

export const selectAllMedicines = state => state.medicines.allMedicines;
export const selectMedicinesByShop = state => state.medicines.medicinesByShop;
export const selectIsLoading = state => state.medicines.isLoading;
export const selectError = state => state.medicines.error;

// --------------- shoppingCart -----------------

export const selectBasket = state => state.shoppingCart.basket;

// --------------- FILTER -----------------

export const selectSort = state => state.filter.sort;
export const selectFilterMedicineByShop = state => state.filter.filterMedicineByShop;
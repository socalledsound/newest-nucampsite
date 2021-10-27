import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchPartners = createAsyncThunk(
    'partners/fetchPartners',
    async () => {
        const response = await fetch(baseUrl + 'partners');
        return response.json();
    }
);

const initialState = { 
    isLoading: true, 
    errMsg: null, 
    partnersArray: ['a thing'] 
}

const partnersSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPartners.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPartners.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = null;
            state.partnersArray = action.payload;
        },
        [fetchPartners.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error;
        },
    },
});

export const selectFeaturedPartner = state => {
    return state.partners.partnersArray.find((item) => item.featured);
}

export const selectPartnersData = state => ({
    items: state.partners.partnersArray,
    isLoading: state.partners.isLoading, 
    errMsg: state.partners.errMsg 
})


export const selectFeaturedPartnerData = state => ({
    featured : selectFeaturedPartner(state),
    isLoading : state.partners.isLoading, 
    errMsg : state.partners.errMsg 
})


export const partnersReducer = partnersSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchPromotions = createAsyncThunk(
    'promotions/fetchPromotions',
    async () => {
        const response = await fetch(baseUrl + 'promotions');
        return response.json();
    }
);

const initialState = {
    isLoading: false, 
    errMsg: null, 
    promotionsArray: [] 
}

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPromotions.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPromotions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = null;
            state.promotionsArray = action.payload;
        },
        [fetchPromotions.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error;
        },
    },
});

export const selectFeaturedPromotion = (state) => state.promotions.promotionsArray.find((item) => item.featured)    

export const selectPromotionsData = state => ({
    items: state.promotions.promotionsArray,
    isLoading: state.promotions.isLoading, 
    errMsg: state.promotions.errMsg 
})

export const selectFeaturedPromotionData = state => ({
        featured : selectFeaturedPromotion(state),
        isLoading : state.promotions.isLoading, 
        errMsg : state.promotions.errMsg 
})

export const promotionsReducer = promotionsSlice.reducer;

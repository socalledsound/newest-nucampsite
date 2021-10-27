import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
// import { CAMPSITES } from '../../app/shared/CAMPSITES'
export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async() => {
        const response= await fetch(baseUrl + 'campsites')
        return response.json()
    }
);

const initialState = {
    isLoading: true, 
    errMsg: null, 
    campsitesArray: [],
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state, action) => {
            state.isLoading = true;   
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = null;
            state.campsitesArray = action.payload; 
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error;
        },
    },
});

export const selectCampsites = state => state.campsites.campsitesArray

export const selectFeaturedCampsite = state => {
    return state.campsites.campsitesArray.find((item) => item.featured);
}

export const selectCampsiteById = campsiteId => state => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(campsiteId)
    );
}
 
export const selectCampsitesData = state => ({
    items: state.campsites.campsitesArray,
    isLoading: state.campsites.isLoading, 
    errMsg: state.campsites.errMsg 
})


export const selectFeaturedCampsiteData = state => ({
        featured : selectFeaturedCampsite(state),
        isLoading : state.campsites.isLoading, 
        errMsg : state.campsites.errMsg 
})

export const campsitesReducer = campsitesSlice.reducer;

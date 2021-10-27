import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';
// import { nucampApi } from '../services/nucampsite';

const reducer = combineReducers({
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user : userReducer,
    // [nucampApi.reducerPath] : nucampApi.reducer,
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([logger]),
});

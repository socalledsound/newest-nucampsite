import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
// import { COMMENTS } from '../../app/shared/COMMENTS'
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        return response.json();
    }
);

export const postComment = createAsyncThunk(
    'comments/postComment',
    async (payload, { dispatch }) => {
        const newComment = payload;
        newComment.date = new Date().toISOString();

        try {
            let response = await fetch(baseUrl + 'comments', {
                method: 'POST',
                body: JSON.stringify(newComment),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const error = new Error(
                    `Error ${response.status}: ${response.statusText}`
                );
                error.response = response;
                throw error;
            } else {
                response = await response.json();
                dispatch(addComment(response));
            }
        } catch (error) {
            console.error('post comment error', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        }
    }
);

const initialState =  { 
    isLoading: true, 
    errMsg: null, 
    commentsArray: [], 
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.commentsArray.push(action.payload);
        },
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.payload;
        },
    },
});

export const selectComments = state => state.comments.commentsArray

export const selectCampsiteComments = campsiteId => state => 
    selectComments(state).filter((comment) => comment.campsiteId === parseInt(campsiteId))


export const { addComment } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;

import {
  AnyAction,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostsStart(state: PostState) {
      state.isLoading = true;
    },
    getPostsSuccess(state: PostState, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getPostsFailure(state: PostState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure } =
  postSlice.actions;

export default postSlice.reducer;

export const fetchPosts = () => async (dispatch: any) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch(getPostsStart());
    dispatch(getPostsSuccess(data));
  } catch (error: any) {
    dispatch(getPostsFailure(error.message));
  }
};

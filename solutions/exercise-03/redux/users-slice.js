import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dao } from '@speedingplanet/rest-server';

const initialState = {
  byIds: {},
  allIds: [],
};

const fetchUsersAsync = createAsyncThunk('users/fetchUsersAsync', async function () {
  const response = await dao.findAllUsers();
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [fetchUsersAsync.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUsersAsync.fulfilled]: (state, { payload }) => {
      payload.forEach((item) => {
        state.byIds[item.id] = item;
        state.allIds.push(item.id);
      });
      state.isLoading = false;
    },
    [fetchUsersAsync.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

const getUser = ({ users }, userId) => users.byIds[userId];

export { fetchUsersAsync, getUser };
export default usersSlice.reducer;

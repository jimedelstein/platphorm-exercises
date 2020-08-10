import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dao } from '@speedingplanet/rest-server';

const initialState = {
  byIds: {},
  allIds: [],
  selectedTransaction: 1,
};

const fetchTransactionsAsync = createAsyncThunk(
  'transactions/fetchUsersAsync',
  async function () {
    const response = await dao.findAllTransactions();
    return response.data;
  },
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    selectTransaction: (state, { payload }) =>
      (state.selectedTransaction = state.byIds[payload]),
  },
  extraReducers: {
    [fetchTransactionsAsync.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTransactionsAsync.fulfilled]: (state, { payload }) => {
      payload.forEach((item) => {
        state.byIds[item.id] = item;
        state.allIds.push(item.id);
      });
      state.isLoading = false;
    },
    [fetchTransactionsAsync.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

// This costs practically nothing, so no point in creating a selector
const getTransaction = ({ transactions }, transactionId) =>
  transactions.byIds[transactionId];
const getSelectedTransaction = ({ transactions }) => {
  return transactions.byIds[transactions.selectedTransaction];
};

export { fetchTransactionsAsync, getTransaction, getSelectedTransaction };
export default transactionsSlice.reducer;

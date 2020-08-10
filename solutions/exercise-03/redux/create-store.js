import { configureStore } from '@reduxjs/toolkit';
import users, { fetchUsersAsync } from './users-slice';
import transactions, { fetchTransactionsAsync } from './transactions-slice';

const store = configureStore({
  reducer: {
    users,
    transactions,
  },
});

store.dispatch(fetchUsersAsync());
store.dispatch(fetchTransactionsAsync());

export default store;

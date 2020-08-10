/*
  Configure an initial state for the transactions slice
  You'll need a byIds lookup object,
  an allIds array
  And a selectedTransaction, initialized to 1
*/

/*
  Create an async thunk called 'transactions/fetchUsersAsync',
  Fetch all the transactions and return the data from the results
  (Remember that dao.findAllTransactions returns {data, response} 
    and you want data)
*/

/*
  Use createSlice() to create a transactions slice where the 
  name is 'transactions', there is one reducer for 'selectTransaction',
  and there are extraReducers for 
  fetchTransactionsAsync.pending
  fetchTransactionsAsync.fulfilled
  fetchTransactionsAsync.rejected

  Look at users-slice in this same directory for reference
*/

/*
  Create two selectors:
  getTransaction which takes state and a transaction id as arguments and 
    and returns the matching transaction
  getSelectedTransaction which takes state and returns the 
    selectedTransaction property
  
  No need to worry about using reselect() or memoizing. These are cheap selectors

  Do remember that the state passed to the selector is the ENTIRE state, so 
  selectedTransaction would be available as state.transactions.selectedTransaction. 
*/

/*
  Export transactionSlice.reducer as the default
  Export fetchTransactionsAsync, and the two selectors as well
*/

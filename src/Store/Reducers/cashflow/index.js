const defaultValue = {
  incomes: [],
  expenses: [],
  filterOptions: {
    startDate: new Date() - 10,
    endDate: new Date()
  },
  pagingIncome: {
    currentPage: 0,
    totalPages: 0,
    pagesLoaded: 0,
    limit: 0,
  },
  pagingExpenses: {
    currentPage: 0,
    totalPages: 0,
    pagesLoaded: 0,
    limit: 0,
  }
}

const reducer = (state = defaultValue, action = { type: 'NONE', payload: null }) => {
  const { type, payload } = action;
  switch (type) {

    default:
      return state;
  }
}

export default reducer;

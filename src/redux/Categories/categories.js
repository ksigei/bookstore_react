const CHECK = 'CHECK';

export const CheckStatus = () => ({
  type: CHECK,
});

const categories = {
  categories: [],
};

const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default: return state;
  }
};

export default categoryReducer;

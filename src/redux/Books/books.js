const ADD = 'bookstore/Books/ADD';
const REMOVE = 'bookstore/Books/REMOVE';

export const AddAction = (data) => ({ type: ADD, payLoad: data });

export const RemoveAction = (id) => ({ type: REMOVE, payLoad: id });

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return state.push(action.payLoad);
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

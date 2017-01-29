import { combineReducers } from 'redux';
import BooksReducer from "./reducer_book";
import ActiveBooksReducer from './reducer_active_book.js';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBooksReducer
});

export default rootReducer;

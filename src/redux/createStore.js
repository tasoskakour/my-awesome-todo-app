
import { createStore, combineReducers } from 'redux';
import { todo } from './modules'

const appReducers = combineReducers({
    todo
}) // In a real-world app this would be the list of all the reducers used

export const store = createStore(appReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

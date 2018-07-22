import { combineReducers } from 'redux';
import taskReducer from './tasks';
import toggleFormReducer from './toggleForm';
import taskEditing from './taskEditing'
import filterTaskReducer from './filterTask'
import sortTaskReducer from './sortTask'
import searchTaskReducer from './searchTask'

// return ve return cua cac sepereate reducers
const rootReducer = combineReducers({
    tasks: taskReducer,
    isDisplayForm: toggleFormReducer,
    taskEditing,
    filterResult: filterTaskReducer,
    sortTaskReducer: sortTaskReducer,
    searchTaskReducer
});

export default rootReducer;
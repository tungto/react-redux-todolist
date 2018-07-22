import * as actionTypes from './../constants/actionTypes';

const initialState = {
    sortBy: 'name',
    sortValue: 1
}

var sortTaskReducer = (state = initialState, action) => {
    var newState = { ...state }
    switch (action.type) {
        case actionTypes.SORT_TASK:

            newState = {
                sortBy: action.sortBy,
                sortValue: action.sortValue
            }
            return newState;
        default:
            return state
    }
}

export default sortTaskReducer;
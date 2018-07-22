import * as actionTypes from './../constants/actionTypes';

var initialState = {
    filterTable: {
        name: '',
        status: -1,
    }
}




var filterTaskReducer = (state = initialState, action) => {
    // Note: initState is object, so use object instead of array destructuring
    var newState = { ...state }
    switch (action.type) {
        case actionTypes.FILTER_TASK:

            newState.filterTable = {
                name: action.filter.name.toLowerCase(),
                status: parseInt(action.filter.status, 10)
            }
            console.log(newState)
            return newState;
        default:
            return state;
    }
}

export default filterTaskReducer;
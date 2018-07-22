import * as actionTypes from '../constants/actionTypes';

var initialState = false;

var toggleFormReducer = (state = initialState, action) => {
    switch (action.type) {  // action.type NOT types 
        case actionTypes.TOGGLE_FORM:
            var newState = state;
            return !newState

        case actionTypes.OPEN_FORM:
            newState = true;
            return newState;
        case actionTypes.CLOSE_FORM:
            newState = false;
            return newState;
        default: return state
    }
}

export default toggleFormReducer

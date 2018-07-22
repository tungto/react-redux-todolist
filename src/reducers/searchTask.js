import * as actionTypes from './../constants/actionTypes';
/* var initialState = {
    keyword: ''
} */ // tai sao viet the nay lai sai

var initialState = ''

var searchTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_TASK:
            console.log(action)
            return action.keyword;
        default:
            return state
    }
}

export default searchTaskReducer;
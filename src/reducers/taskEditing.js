import * as actionTypes from '../constants/actionTypes';

var initialState = {
    id: '',
    name: '',
    status: false
};
/* Khi click vao function  */


var editTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TASK_INFO:
            return action.task;
        case actionTypes.CLEAR_TASK:
            var emptySate = {
                id: '',
                name: '',
                status: false
            };
            return emptySate
        default:
            return state;
    }
}

export default editTaskReducer;
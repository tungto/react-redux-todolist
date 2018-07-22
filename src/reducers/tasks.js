import * as actionTypes from '../constants/actionTypes';

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            return result = index
        }
    })
    return result;
}

var generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + s4();
}

var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data : [];

var taskReducer = (state = initialState, action) => {
    var index;
    var newState = [...state]
    switch (action.type) {
        case actionTypes.LIST_ALL:
            return state;
        /* ----Case 1--- */
        case actionTypes.SAVE_TASK:

            var task = {
                id: action.task.id,
                name: action.task.name,
                status: (action.task.status === 'true' || action.task.status === true) ? true : false
            };
            if (!task.id) { // new
                task.id = generateID();
                newState = [
                    ...state,
                    task
                ]
            } else { // edit
                index = findIndex(state, task.id);
                newState[index] = task;
            }
            // console.log(state)
            localStorage.setItem('tasks', JSON.stringify(newState));
            return [...newState];
        /* ----Case 3--- */
        case actionTypes.UPDATE_STATUS_TASK:
            index = findIndex(newState, action.task.id);
            newState[index].status = !newState[index].status
            localStorage.setItem('tasks', JSON.stringify(newState));
            return [...newState];

        case actionTypes.DELETE_TASK:

            // action is action in /*-- actions/index ---*/
            // vi TaskList return TaskItem có key = id => get key to Delete item
            index = findIndex(state, action.key)
            localStorage.setItem('tasks', JSON.stringify([
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]))
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        /* ----Case 4--- */
        default:
            return state;
    }
}

export default taskReducer;
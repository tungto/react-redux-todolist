import * as actionTypes from './../constants/actionTypes';

export const saveTask = (task) => {
    return {
        type: actionTypes.SAVE_TASK,
        task
    }
}

export const toggleForm = () => {
    return {
        type: actionTypes.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type: actionTypes.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: actionTypes.CLOSE_FORM
    }
}

export const updatStateTask = task => {
    return {
        type: actionTypes.UPDATE_STATUS_TASK,
        task
    }
}
export const deleteTask = key => {
    return {
        type: actionTypes.DELETE_TASK,
        key
    }
}
export const updateTaskInfo = task => {
    return {
        type: actionTypes.UPDATE_TASK_INFO,
        task
    }
}
export const clearTaskForm = () => {
    return {
        type: actionTypes.CLEAR_TASK
    }
}
export const filterTask = (filter) => {
    return {
        type: actionTypes.FILTER_TASK,
        filter
    }
}
export const sortTask = (sortBy, sortValue) => {
    return {
        type: actionTypes.SORT_TASK,
        sortBy,
        sortValue
    }
}
export const searchTask = (keyword) => {
    return {
        type: actionTypes.SEARCH_TASK,
        keyword
    }
}

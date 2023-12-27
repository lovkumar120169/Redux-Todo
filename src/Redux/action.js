import { ADD, DELETE_TODO_FALIUR, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODO_FALIUR, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FALIUR, POST_TODO_REQUEST, POST_TODO_SUCCESS, UPDATE_TODO_FALIUR, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "./actionType"


export const addTodoFunction = (payload) => {
    return { type: ADD, payload }
}

export const getTodoSuccess = (payload) => {
    return { type: GET_TODO_SUCCESS, payload }
}

export const getTodoRequest = () => {
    return { type: GET_TODO_REQUEST }
}
export const getTodoFaliur = () => {
    return { type: GET_TODO_FALIUR }
}

export const postTodoRequest = () => {
    return { type: POST_TODO_REQUEST }
}
export const postTodoSuccess = (payload) => {
    return { type: POST_TODO_SUCCESS, payload }
}
export const postTodoFaliur = () => {
    return { type: POST_TODO_FALIUR }
}

export const deleteTodoRequest = () => {
    return { type: DELETE_TODO_REQUEST }
}
export const deleteTodoSuccess = () => {
    return { type: DELETE_TODO_SUCCESS }
}
export const deleteTodoFaliur = () => {
    return { type: DELETE_TODO_FALIUR }
}


export const updateTodoRequest = () => {
    return { type: UPDATE_TODO_REQUEST }
}
export const updateTodoSuccess = () => {
    return { type: UPDATE_TODO_SUCCESS }
}
export const updateTodoFaliur = () => {
    return { type: UPDATE_TODO_FALIUR }
}
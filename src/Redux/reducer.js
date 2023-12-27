import { ADD, DELETE_TODO_FALIUR, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODO_FALIUR, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FALIUR, POST_TODO_REQUEST, POST_TODO_SUCCESS, UPDATE_TODO_FALIUR, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "./actionType"


export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ADD:
            return { ...state, TodoArr: [...state.TodoArr, payload] }
        case GET_TODO_REQUEST:
            return { ...state, isLoading: true }
        case GET_TODO_SUCCESS:
            return { ...state, isLoading: false, TodoArr: payload }
        case GET_TODO_FALIUR:
            return { ...state, isLoading: false, isError: true }
        case POST_TODO_REQUEST:
            return { ...state, isLoading: true }
        case POST_TODO_SUCCESS:
            return { ...state, isLoading: false, TodoArr: [...state.TodoArr, payload] }
        case POST_TODO_FALIUR:
            return { ...state, isLoading: false, isError: true }
        case DELETE_TODO_REQUEST:
            return { ...state, isLoading: true }
        case DELETE_TODO_SUCCESS:
            return { ...state, isLoading: false, TodoArr: [...state.TodoArr] }
        case DELETE_TODO_FALIUR:
            return { ...state, isLoading: false, isError: true }
        case UPDATE_TODO_REQUEST:
            return { ...state, isLoading: true }
        case UPDATE_TODO_SUCCESS:
            return { ...state, isLoading: false, TodoArr: [...state.TodoArr] }
        case UPDATE_TODO_FALIUR:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}
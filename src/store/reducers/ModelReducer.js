const INITIAL_STATE = {
    models: [],
    loading: false,
    error: false,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ('SET_MODELS'):
            return {
                ...state,
                models: action.payload.models,
            }
        case ('SET_ERROR_MODELS'):
            return {
                ...state,
                error: action.payload.error,
            }
        case ('SET_LOADING_MODELS'):
            return {
                ...state,
                loading: action.payload.loading,
            }
        default:
            return state
    }
}
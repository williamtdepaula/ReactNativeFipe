const INITIAL_STATE = {
    brands: [],
    loading: false,
    error: false,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ('SET_BRANDS'):
            return {
                ...state,
                brands: action.payload.brands,
            }
        case ('SET_ERROR_BRANDS'):
            return {
                ...state,
                error: action.payload.error,
            }
        case ('SET_LOADING_BRANDS'):
            return {
                ...state,
                loading: action.payload.loading,
            }
        default:
            return state
    }
}
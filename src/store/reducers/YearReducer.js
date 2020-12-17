const INITIAL_STATE = {
    years: [],
    loading: false,
    error: false,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ('SET_YEARS'):
            return {
                ...state,
                years: action.payload.years,
            }
        case ('SET_ERROR_YEARS'):
            return {
                ...state,
                error: action.payload.error,
            }
        case ('SET_LOADING_YEARS'):
            return {
                ...state,
                loading: action.payload.loading,
            }
        default:
            return state
    }
}
const INITIAL_STATE = {
    vehicle: null,
    loading: false,
    error: false,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ('SET_VEHICLE'):
            return {
                ...state,
                vehicle: action.payload.vehicle,
            }
        case ('SET_ERROR_VEHICLE'):
            return {
                ...state,
                error: action.payload.error,
            }
        case ('SET_LOADING_VEHICLE'):
            return {
                ...state,
                loading: action.payload.loading,
            }
        default:
            return state
    }
}
const INITIAL_STATE = {
    brand: 0,
    model: 0,
    year: 0,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ('SET_BRAND'):
            return {
                ...state,
                brand: action.payload.brand,
            }
        case ('SET_MODEL'):
            return {
                ...state,
                model: action.payload.model,
            }
        case ('SET_YEAR'):
            return {
                ...state,
                year: action.payload.year,
            }
        default:
            return state
    }
}
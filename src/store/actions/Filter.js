export const setBrand = brand => {
    return {
        type: 'SET_BRAND',
        payload: {
            brand,
        }
    }
}

export const setModel = model => {
    return {
        type: 'SET_MODEL',
        payload: {
            model,
        }
    }
}

export const setYear = year => {
    return {
        type: 'SET_YEAR',
        payload: {
            year,
        }
    }
}
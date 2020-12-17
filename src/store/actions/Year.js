export const getYearsExternal = (model) => {
    return {
        type: 'GET_YEARS',
        payload: {
            model
        }
    }
}

export const setYears = years => {
    return {
        type: 'SET_YEARS',
        payload: {
            years
        }
    }
}

export const setLoadingYears = loading => {
    return {
        type: 'SET_LOADING_YEARS',
        payload: {
            loading
        }
    }
}

export const setErrorYears = error => {
    return {
        type: 'SET_ERROR_YEARS',
        payload: {
            error
        }
    }
}

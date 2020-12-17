export const getBrandsExternal = () => {
    return {
        type: 'GET_BRANDS',
    }
}

export const setBrands = brands => {
    return {
        type: 'SET_BRANDS',
        payload: {
            brands
        }
    }
}

export const setLoadingBrands = loading => {
    return {
        type: 'SET_LOADING_BRANDS',
        payload: {
            loading
        }
    }
}

export const setErrorBrands = error => {
    return {
        type: 'SET_ERROR_BRANDS',
        payload: {
            error
        }
    }
}

export const onSelectBrand = brand => {
    return {
        type: 'ON_SELECT_BRAND',
        payload: {
            brand
        }
    }
}

export const resetNextPickersAfterBrand = () => {
    return {
        type: 'RESET_NEXT_PICKERS_AFTER_BRAND'
    }
}
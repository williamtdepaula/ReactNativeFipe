export const getModelsExternal = (brand) => {
    return {
        type: 'GET_MODELS',
        payload: {
            brand
        }
    }
}

export const setModels = models => {
    return {
        type: 'SET_MODELS',
        payload: {
            models
        }
    }
}

export const setLoadingModels = loading => {
    return {
        type: 'SET_LOADING_MODELS',
        payload: {
            loading
        }
    }
}

export const setErrorModels = error => {
    return {
        type: 'SET_ERROR_MODELS',
        payload: {
            error
        }
    }
}

export const onSelectModel = model => {
    return {
        type: 'ON_SELECT_MODEL',
        payload: {
            model
        }
    }
}

export const resetNextPickersAfterModel = () => {
    return {
        type: 'RESET_NEXT_PICKERS_AFTER_MODEL'
    }
}
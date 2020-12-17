export const setVehicle = vehicle => {
    return {
        type: 'SET_VEHICLE',
        payload: {
            vehicle,
        }
    }
}

export const getVehicle = () => {
    return {
        type: 'GET_VEHICLE',
    }
}

export const setLoadingVehicle = loading => {
    return {
        type: 'SET_LOADING_VEHICLE',
        payload: {
            loading
        }
    }
}

export const setErrorVehicle = error => {
    return {
        type: 'SET_ERROR_VEHICLE',
        payload: {
            error
        }
    }
}
import { put, call, select } from 'redux-saga/effects'
import { getVehicle } from '../../utils/Network'
import { setErrorVehicle, setLoadingVehicle, setVehicle } from '../actions/Vehicle'

function* asyncGetVehicle() {

    const brandSelected = yield select(state => state.filter.brand)
    const modelSelected = yield select(state => state.filter.model)
    const yearSelected = yield select(state => state.filter.year)

    yield put(setLoadingVehicle(true))

    try {
        const responseValue = yield call(getVehicle, brandSelected, modelSelected, yearSelected)

        yield put(setVehicle(responseValue))

        yield put(setErrorVehicle(false))

    } catch (e) {
        yield put(setErrorVehicle(true))
    }

    yield put(setLoadingVehicle(false))

}

export {
    asyncGetVehicle,
}

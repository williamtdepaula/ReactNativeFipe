import { put, call, select, delay, fork } from 'redux-saga/effects'
import { getBrands } from '../../utils/Network'
import { setBrands, setErrorBrands, setLoadingBrands } from '../actions/Brand'
import { setBrand } from '../actions/Filter'
import { getModelsExternal } from '../actions/Model'


function* asyncGetBrands({ }) {
    yield put(setLoadingBrands(true))
    try {
        const responseBrands = yield call(getBrands)

        yield put(setBrands(responseBrands))

        yield put(setErrorBrands(false))
    } catch (e) {
        yield put(setErrorBrands(true))
        console.tron.logImportant('response', e)
    }
    yield put(setLoadingBrands(false))

}

function* onSelectBrand({ payload }) {
    const { brand } = payload

    yield put(setBrand(brand))

    yield put(getModelsExternal(brand))
}

export {
    asyncGetBrands,
    onSelectBrand
}
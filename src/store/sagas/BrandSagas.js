import { put, call, select, delay, fork } from 'redux-saga/effects'
import { showDialogWarningRequest } from '../../utils/Dialog'
import { getBrands } from '../../utils/Network'
import { resetNextPickersAfterBrand, setBrands, setErrorBrands, setLoadingBrands } from '../actions/Brand'
import { setBrand, setModel, setYear } from '../actions/Filter'
import { getModelsExternal, setModels } from '../actions/Model'
import { setYears } from '../actions/Year'


function* asyncGetBrands({ }) {
    yield put(setLoadingBrands(true))
    try {
        const responseBrands = yield call(getBrands)

        yield put(setBrands(responseBrands))

        yield put(setErrorBrands(false))
    } catch (e) {
        yield put(setErrorBrands(true))

        yield fork(showDialogWarningRequest)
    }
    yield put(setLoadingBrands(false))

}

function* onSelectBrand({ payload }) {
    const { brand } = payload

    //Reseta os valores dos pickers seguintes
    yield put(resetNextPickersAfterBrand())

    yield put(setBrand(brand))

    yield put(getModelsExternal(brand))

}

function* resetNextPickers() {
    yield put(setModel(0))

    yield put(setYear(0))

    yield put(setModels([]))

    yield put(setYears([]))
}

export {
    asyncGetBrands,
    onSelectBrand,
    resetNextPickers
}
import { put, call, fork } from 'redux-saga/effects'
import { getModels } from '../../utils/Network'
import { resetNextPickersAfterModel, setErrorModels, setLoadingModels, setModels } from '../actions/Model'
import { setModel, setYear } from '../actions/Filter'
import { getYearsExternal, setYears } from '../actions/Year'
import { showDialogWarningRequest } from '../../utils/Dialog'


function* asyncGetModels({ payload }) {
    const { brand } = payload

    yield put(setLoadingModels(true))

    try {
        const responseModels = yield call(getModels, brand)

        yield put(setModels(responseModels))

        yield put(setErrorModels(false))
    } catch (e) {
        yield put(setErrorModels(true))
        yield fork(showDialogWarningRequest)
    }

    yield put(setLoadingModels(false))

}

function* onSelectModel({ payload }) {
    const { model } = payload

    //Reseta os valores do picker seguite
    yield put(resetNextPickersAfterModel())   

    yield put(setModel(model))

    yield put(getYearsExternal(model))

    yield put(setYear(0))
}

function* resetNextPickers() {
    yield put(setYear(0))
    
    yield put(setYears([]))
}

export {
    asyncGetModels,
    onSelectModel,
    resetNextPickers
}
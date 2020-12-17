import { put, call } from 'redux-saga/effects'
import { getModels } from '../../utils/Network'
import { setErrorModels, setLoadingModels, setModels } from '../actions/Model'
import { setModel } from '../actions/Filter'
import { getYearsExternal } from '../actions/Year'


function* asyncGetModels({ payload }) {
    const { brand } = payload

    yield put(setLoadingModels(true))

    try {
        const responseModels = yield call(getModels, brand)

        yield put(setModels(responseModels))

        yield put(setErrorModels(false))
    } catch (e) {
        yield put(setErrorModels(true))
    }

    yield put(setLoadingModels(false))

}

function* onSelectModel({ payload }) {
    const { model } = payload

    yield put(setModel(model))

    yield put(getYearsExternal(model))
}

export {
    asyncGetModels,
    onSelectModel
}
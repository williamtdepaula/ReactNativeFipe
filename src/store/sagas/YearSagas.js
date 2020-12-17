import { put, call, select } from 'redux-saga/effects'
import { getYears } from '../../utils/Network'
import { setErrorYears, setLoadingYears, setYears } from '../actions/Year'

function* asyncGetYears({ payload }) {
    const { model } = payload
    const brandSelected = yield select(state => state.filter.brand)

    yield put(setLoadingYears(true))

    try {
        const responseYears = yield call(getYears, brandSelected, model)

        const responseYearsOnlyYearNumber = responseYears.map(year => {
            return {
                nome: year.nome.match(/[0-9]+/g, '')[0],
                codigo: year.codigo
            }
        })

        yield put(setYears(responseYearsOnlyYearNumber))

        yield put(setErrorYears(false))
    } catch (e) {
        yield put(setErrorYears(true))
    }

    yield put(setLoadingYears(false))

}

export {
    asyncGetYears,
}
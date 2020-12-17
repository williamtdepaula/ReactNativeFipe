import { takeLatest, all } from 'redux-saga/effects'

//SAGAS
import * as brandSagas from './BrandSagas'
import * as modelSagas from './ModelSagas'
import * as yearSagas from './YearSagas'
import * as vehicleSagas from './VehicleSagas'

export default function* root() {
    yield all([
        takeLatest('GET_BRANDS', brandSagas.asyncGetBrands),
        takeLatest('ON_SELECT_BRAND', brandSagas.onSelectBrand),
        takeLatest('GET_MODELS', modelSagas.asyncGetModels),
        takeLatest('ON_SELECT_MODEL', modelSagas.onSelectModel),
        takeLatest('GET_YEARS', yearSagas.asyncGetYears),
        takeLatest('GET_VEHICLE', vehicleSagas.asyncGetVehicle),
    ])
}
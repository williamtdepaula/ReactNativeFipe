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
        takeLatest('RESET_NEXT_PICKERS_AFTER_BRAND', brandSagas.resetNextPickers),
        takeLatest('GET_MODELS', modelSagas.asyncGetModels),
        takeLatest('ON_SELECT_MODEL', modelSagas.onSelectModel),
        takeLatest('RESET_NEXT_PICKERS_AFTER_MODEL', modelSagas.resetNextPickers),
        takeLatest('GET_YEARS', yearSagas.asyncGetYears),
        takeLatest('GET_VEHICLE', vehicleSagas.asyncGetVehicle),
    ])
}
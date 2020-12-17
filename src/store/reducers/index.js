import { combineReducers } from 'redux'
import FilterReducer from './FilterReducer'
import BrandReducer from './BrandReducer'
import ModelReducer from './ModelReducer'
import YearReducer from './YearReducer'
import VehicleReducer from './VehicleReducer'

const appReducer = combineReducers({
    filter: FilterReducer,
    brand: BrandReducer,
    model: ModelReducer,
    year: YearReducer,
    vehicle: VehicleReducer,
})

export default appReducer
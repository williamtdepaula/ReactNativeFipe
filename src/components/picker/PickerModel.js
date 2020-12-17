import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PickerOption from '.'
import { onSelectBrand } from '../../store/actions/Brand'
import { onSelectModel } from '../../store/actions/Model'

export default function PickerModel({ }) {
    
    const dispatch = useDispatch()

    const modelsList = useSelector(state => state.model.models)
    const loading = useSelector(state => state.model.loading)

    return (
        <PickerOption title='Modelo' values={modelsList} onSelect={(model) => dispatch(onSelectModel(model))} enabled={!loading} loading={loading} />
    )
}
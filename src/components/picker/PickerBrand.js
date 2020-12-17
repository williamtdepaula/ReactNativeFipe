import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PickerOption from '.'
import { onSelectBrand } from '../../store/actions/Brand'

export default function PickerBrand({ }) {
    
    const dispatch = useDispatch()

    const brandsList = useSelector(state => state.brand.brands)
    const loading = useSelector(state => state.brand.loading)

    return (
        <PickerOption title='Marca' values={brandsList} onSelect={(brand) => dispatch(onSelectBrand(brand))} enabled={!loading} loading={loading} />
    )
}
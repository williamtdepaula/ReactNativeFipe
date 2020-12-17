import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PickerOption from '.'
import { getBrandsExternal, onSelectBrand, resetNextPickersAfterBrand } from '../../store/actions/Brand'
import { setBrand } from '../../store/actions/Filter'

export default function PickerBrand({ }) {

    const dispatch = useDispatch()

    const { brands, loading, error } = useSelector(state => state.brand)

    return (
        <PickerOption
            title='Marca'
            values={brands}
            onSelect={(brand) => dispatch(onSelectBrand(brand))}
            enabled={!loading}
            loading={loading}
            showTryAgainButton={error}
            onPressTryAgain={() => dispatch(getBrandsExternal())}
            onPressSelectOption={() => dispatch(resetNextPickersAfterBrand())}
        />
    )
}
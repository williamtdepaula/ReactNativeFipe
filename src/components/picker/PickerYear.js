import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PickerOption from '.'
import { setYear } from '../../store/actions/Filter'
import { getYearsExternal } from '../../store/actions/Year'

export default function PickerYear({ }) {

    const dispatch = useDispatch()

    const { years, loading, error } = useSelector(state => state.year)

    return (
        <PickerOption
            title='Ano'
            values={years}
            onSelect={(year) => dispatch(setYear(year))}
            enabled={!loading}
            loading={loading}
            onPressTryAgain={() => dispatch(getYearsExternal())}
            showTryAgainButton={error}
            onPressSelectOption={() => dispatch(setYear(0))}
        />
    )
}
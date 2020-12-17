import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PickerOption from '.'
import { setYear } from '../../store/actions/Filter'

export default function PickerYear({ }) {
    
    const dispatch = useDispatch()

    const yearsList = useSelector(state => state.year.years)
    const loading = useSelector(state => state.year.loading)

    return (
        <PickerOption title='Ano' values={yearsList} onSelect={(year) => dispatch(setYear(year))} enabled={!loading} loading={loading} />
    )
}
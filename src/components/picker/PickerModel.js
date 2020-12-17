import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PickerOption from '.'
import { getModelsExternal, onSelectModel, resetNextPickersAfterModel } from '../../store/actions/Model'

export default function PickerModel({ }) {

    const dispatch = useDispatch()

    const { models, loading, error } = useSelector(state => state.model)

    return (
        <PickerOption
            title='Modelo'
            values={models}
            onSelect={(model) => dispatch(onSelectModel(model))}
            enabled={!loading}
            loading={loading}
            onPressTryAgain={() => dispatch(getModelsExternal())}
            showTryAgainButton={error}
            onPressSelectOption={() => dispatch(resetNextPickersAfterModel())}
        />
    )
}
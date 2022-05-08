import React, {useEffect} from 'react';
import './App.css';
import SetCounter from './components/setCounter/SetCounter';
import CommonCounter from './components/commonCounter/CommonCounter';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {InitialStateType, setCountAC, setErrorAC} from './bll/counter-reducer';

function App() {
    let count = useSelector<AppStateType, InitialStateType>(state => state.count);
    let minValue = useSelector<AppStateType, InitialStateType>(state => state.minValue);
    let maxValue = useSelector<AppStateType, InitialStateType>(state => state.maxValue);
    let error = useSelector<AppStateType, InitialStateType>(state => state.error);
    let editMode = useSelector<AppStateType, InitialStateType>(state => state.editMode);
    let dispatch = useDispatch();

    const checkError = () => {
        if (minValue.minValue >= maxValue.maxValue || minValue.minValue < 0 || maxValue.maxValue < 0) {
            dispatch(setErrorAC('Incorrect value!'));
        } else {
            dispatch(setErrorAC(''));
        }
    };

    useEffect(() => {
            if (editMode.editMode) {
                checkError();
            }
        }
    );

    const countIncrementClick = () => {
        dispatch(setCountAC(count.count + 1));
    };

    const countResetClick = () => {
        dispatch(setCountAC(minValue.minValue));
    };

    const onSetClick = () => {
        dispatch(setCountAC(minValue.minValue));
    };

    return (
        <div className="wrapper">
            <SetCounter
                setMinValue={dispatch}
                countSetClick={onSetClick}
                minValue={minValue.minValue}
                setMaxValue={dispatch}
                maxValue={maxValue.maxValue}
                setEditMode={dispatch}
                error={error.error}
            />
            <CommonCounter
                count={count.count}
                minValue={minValue.minValue}
                maxValue={maxValue.maxValue}
                countIncrementClick={countIncrementClick}
                countResetClick={countResetClick}
                error={error.error}
                editMode={editMode.editMode}
            />
        </div>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import SetCounter from './components/setCounter/SetCounter';
import CommonCounter from './components/commonCounter/CommonCounter';


function App() {
    const minInitialValue = localStorage.getItem('minValue') || '';
    const maxInitialValue = localStorage.getItem('maxValue') || '';

    let [count, setCount] = useState<number>(+minInitialValue);
    let [minValue, setMinValue] = useState<number>(+minInitialValue);
    let [maxValue, setMaxValue] = useState<number>(+maxInitialValue);
    let [error, setError] = useState<string>('');
    let [editMode, setEditMode] = useState<boolean>(false);
    let [editModeCounter, setEditModeCounter] = useState<boolean>(false);

    const checkError = () => {
        if (minValue >= maxValue || minValue < 0 || maxValue < 0) {
            setError('Incorrect value!');
        } else {
            setError('');
        }
    };

    useEffect(() => {
            if (editMode) {
                checkError();
            }
        }
    );

    const countIncrementClick = () => {
        setCount(count + 1);
    };

    const countResetClick = () => {
        setCount(minValue);
    };

    const onSetClick = () => {
        setCount(minValue);
    };

    return (
        <div className="wrapper">
            {editModeCounter
                ? <SetCounter
                    countSetClick={onSetClick}
                    minValue={minValue}
                    setMinValue={setMinValue}
                    setMaxValue={setMaxValue}
                    maxValue={maxValue}
                    setEditMode={setEditMode}
                    error={error}
                    setEditModeCounter={setEditModeCounter}
                />
                :<CommonCounter
                    countSetClick={onSetClick}
                    count={count}
                    minValue={minValue}
                    maxValue={maxValue}
                    countIncrementClick={countIncrementClick}
                    countResetClick={countResetClick}
                    error={error}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    setEditModeCounter={setEditModeCounter}
                />}
        </div>
    );
}

export default App;

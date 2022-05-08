import React, {Dispatch} from 'react';
import {ActionType, setEditModeAC} from '../../bll/counter-reducer';
import Button from '../Button';
import SetScoreBoard from './SetScoreBoard';

type SetCounterType = {
    countSetClick: () => void,
    setMinValue: Dispatch<ActionType>,
    maxValue: number,
    minValue: number,
    setMaxValue: Dispatch<ActionType>,
    setEditMode: Dispatch<ActionType>,
    error: string
}

const SetCounter: React.FC<SetCounterType> = (props) => {
    const onSetClickHandler = () => {
        props.setEditMode(setEditModeAC(false));
        props.countSetClick();
    };

    return (
        <div className={'setMain'}>
            <SetScoreBoard
                minValue={props.minValue}
                setMaxValue={props.setMaxValue}
                setMinValue={props.setMinValue}
                maxValue={props.maxValue}
                setEditMode={props.setEditMode}
                error={props.error}
            />
            <div className={'buttons'}>
                <Button
                    name={'Set'}
                    onClickHandler={onSetClickHandler}
                    disabled={props.maxValue < 0 || props.minValue < 0 || props.maxValue === props.minValue}/>
            </div>
        </div>
    );
};

export default SetCounter;


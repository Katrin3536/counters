import React from 'react';
import Button from '../Button';
import ScoreBoard from './ScoreBoard';

type CommonCounterType = {
    count: number
    maxValue: number,
    minValue: number,
    countIncrementClick: () => void,
    countResetClick: () => void
    error: string
    editMode:boolean

}

const CommonCounter: React.FC<CommonCounterType> = (props) => {

    return (
        <div className={'commonMain'}>
            <ScoreBoard
                count={props.count}
                minValue={props.minValue}
                maxValue={props.maxValue}
                error={props.error}
                editMode={props.editMode}

            />
            <div className={'buttons'}>
                <Button name={'Inc'} onClickHandler={props.countIncrementClick}
                        disabled={props.count === props.maxValue || props.maxValue === props.minValue}/>
                <Button name={'Reset'} onClickHandler={props.countResetClick}
                        disabled={props.maxValue === props.minValue}/>
            </div>
        </div>
    );
};

export default CommonCounter;
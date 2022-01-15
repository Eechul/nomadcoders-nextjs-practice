import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { countPlusAction, countMinusAction } from '../reducers/count';
import { Button } from 'antd';

export default function test() {
    const dispath = useDispatch();
    const count = useSelector(state => state.count);

    const onClickPlus = useCallback(() => {
        dispath(countPlusAction());
    }, []);
    const onClickMinus = useCallback(() => {
        dispath(countMinusAction());
    }, []);
    return (
        <div>
            <h1>About {count}</h1>
            <Button type='primary' size={12} onClick={onClickPlus}>+</Button>
            <Button type='primary' size={12} onClick={onClickMinus}>-</Button>

        </div>
    );
}
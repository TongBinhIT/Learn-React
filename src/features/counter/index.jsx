import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const counter = useSelector(state => state.count)
    
    const dispatch = useDispatch()
    

    const handleIncrease = () => {
        const action = increase()
        
        dispatch(action)
    }
    const handleDecrease = () => {
        const action = decrease()
        dispatch(action)
    }

    return (
        <div>
            Counter : {counter}
            <div>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Increase</button>
            </div>
        </div>
    );
}

export default CounterFeature;
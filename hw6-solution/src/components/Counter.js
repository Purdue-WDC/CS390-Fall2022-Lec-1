import React, { useContext, useEffect } from 'react';
import CounterContext from '../context/CounterContext';

const Counter = () => {
    // REQUIREMENT 3. Extract the value stored in CounterContext.
    const [count, setCount] = useContext(CounterContext);

    // REQUIREMENT 4C.
    useEffect(() => {
        // this return will run when this component UNMOUNTs.
        return () => {
            console.log('UNMOUNTING');
            setCount(c => c + 1);
        };
    }, []);

    // display counter.
    return (
        <div>{count}</div>
    );
};

export default Counter;
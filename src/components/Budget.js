import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div class="alert alert-dark" role="alert" className='alert alert-secondary'>
            <span>Budget: £ {budget}</span>
        </div>
    );
};
export default Budget;

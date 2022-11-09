
import React, {useState} from 'react';
import './Counter.css';

const Counter = ({frequency}) => {

    //Aqui voy a declarar mis Hooks

    const [value, setValue] = useState(0);

    //Funciones

    const operate = (operation) => {

        if(operation){
            setValue(value + frequency);
        } else {
            setValue(value - frequency);
        };

    };

    return(
        <div className='counterDesign'>
            <div onClick={()=>operate(true)}>+</div>
            <div>{value}</div>
            <div onClick={()=>operate(false)}>-</div>
        </div>
    )
}

export default Counter;
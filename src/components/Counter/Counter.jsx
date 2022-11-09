
import React, {useState, useEffect} from 'react';
import './Counter.css';

const Counter = ({frequency}) => {

    //Aqui voy a declarar mis Hooks

    const [value, setValue] = useState(0);

    //Funciones del ciclo de vida

    useEffect(()=>{
        //Esto se ejecuta cuando el componente se ha montado , componentDidMount()
        console.log("Hola, me he montado por primera vez")
    },[]);

    useEffect(()=>{
        //Esto se ejecutará cuando el componente tenga un update, componentDidUpdate()
        console.log("Hola, me he actualizado");
    });

    // useEffect(()=>{
    //     //Este se ejecutará cuando el hook value mute
    // },[value]);

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
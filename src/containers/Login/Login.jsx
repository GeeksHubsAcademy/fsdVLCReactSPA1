import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
 
import './Login.css'
 
const Login = () => {
 
    let navigate = useNavigate();
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidMount (montado)
 
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
 
 
    return (
        <div className='loginDesign'>soy Login</div>
    )
}
export default Login;
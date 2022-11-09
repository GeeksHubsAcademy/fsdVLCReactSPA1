
import React from 'react';

import "./Home.css";

import Counter from '../../components/Counter/Counter';

const Home = () => {


    return(
        // Aqui estamos devolviendo el nodo padre que consiste en un elemento JSX
        <div className="homeDesign">
            soy Home
            <Counter frequency={5}/>
            <Counter frequency={17}/>
            <Counter frequency={11}/>
        </div>
    )

}

export default Home;
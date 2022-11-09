
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Home.css";

import Counter from '../../components/Counter/Counter';

const Home = () => {

    //Este es el primer seteo por defecto, por lo tanto, esto actualiza el estado por primera vez.
    const [characters, setCharacters] = useState([]);


    useEffect(()=>{

        //Llamo a bringCharacters aqui porque quiero traerme los personajes cuando se haya montado el componente POR PRIMERA VEZ.

        //Uso un condicional para NO entrar en un bucle infinito
         if(characters.length === 0){
            bringCharacters();
            
        };

    },[characters]);

    useEffect(()=>{
        // if(characters.length > 0){
        //     console.log("el componente se ha actualizado, hay algoooo",characters);
        // }
    });

    const bringCharacters = async () => {

        try {

            let res = await axios.get("https://rickandmortyapi.com/api/character");
            console.log(res.data.results);
            setCharacters(res.data.results);

        } catch (error) {
            console.log(error)
        }
    }


    return(
        // Aqui estamos devolviendo el nodo padre que consiste en un elemento JSX
        <div className="homeDesign">
            soy Home
            {/* <Counter frequency={5}/> */}
            {/* <Counter frequency={17}/>
            <Counter frequency={11}/> */}
        </div>
    )

}

export default Home;
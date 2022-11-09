
import './App.css';

//Importamos los métodos/elementos necesarios para usar react-router-dom

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Header/>


        <Routes>
          {/* Lo que se contiene aqui es lo cambiante */}

          <Route path={"/"} element={<Home/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/register"} element={<Register/>}/>

        </Routes>
        
        <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;

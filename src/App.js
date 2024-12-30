import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Login from './Page Components/Login';
import MyCard from './Page Components/MyCard';
import MyNavbar from './Page Components/MyNavbar';
import Register from './Page Components/Register';
import CardImage from './Assets/Images/Trimbak_Mandir.jpg';
import HooksDemo from './Page Components/HooksDemo';
import Axiostest from './Page Components/Axiostest';



function App() {
  return (
    <>
      
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/register' element={<Register />} />     {/* Router Demo */}
          <Route path='/login' element={<Login />} />
          <Route path='/link' element={<Axiostest />} />
        </Routes>
      <MyCard img={CardImage} title={"Trimbakeshwar Temple"}/>        {/* Props Demo */}
        < HooksDemo />
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Register /> */}

      
      </>
      );
}

      export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Page Components/Login';
import MyCard from './Page Components/MyCard';
import MyNavbar from './Page Components/MyNavbar';
import Register from './Page Components/Register';



function App() {
  return (
    <>

      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Register /> */}
      <MyCard />
    </>
  );
}

export default App;

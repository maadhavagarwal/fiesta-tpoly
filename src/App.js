// import logo from './logo.svg';
//import './App.css';
// import {Container, Form} from 'react-bootstrap';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Events from './Components/Events';
import EventDetails from './Components/EventDetails';
import EnrollNow from './Components/EnrollNow';
import { Toast } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import Home from './Components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <>
        <Routes>
          <Route path='/' element={<Home/>} extact></Route>
          <Route path='/events' element={<Events/>} extact></Route>
          <Route path='/eventdetails/:eventname' element={<EventDetails/>} extact></Route>
          <Route path='/eventdetails/:eventname/enrollnow' element={<EnrollNow/>} extact></Route>
        </Routes>
      </>
      <Toaster/>
    </BrowserRouter>
    </>
  );
}

export default App;

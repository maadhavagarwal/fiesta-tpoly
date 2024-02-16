import logo from './logo.svg';
//import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';import {Container, Form} from 'react-bootstrap';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './components/screen/login';
import Signup from './components/screen/signup';
import Course from './components/Course'
import Mock from './components/Mock'
import Master from './components/Master'
import Event from './components/event'
import Form1 from './components/Form'
import Form2 from './components/Form1'
import Form3 from './components/Form2'
import Form4 from './components/Form3'
import Form5 from './components/Form4'
import Form6 from './components/Form5'
import FSem1 from './components/FSem1'
import FSem2 from './components/FSem2'
import FSem3 from './components/FSem3'
import FSem4 from './components/FSem4'
import FSem5 from './components/FSem5'
import FSem6 from './components/FSem6'
import Sparks from './components/Sparkstudio'
import AutionSkill from './components/Autionskill'
import Eluction from './components/Eluction';
import Spark from './components/Sparkstudio'
import sparks from './components/sparkstudios'
import eluctions from './components/eluctions'
import Sem1 from './components/Sem1';
import sem1s from './components/sem1s'
import Sem2 from './components/Sem2';
import sem2s from './components/sem2s'
 
import Sem3 from './components/Sem3';
import Sem from './components/Sem';
import Sem5 from './components/Sem5';
import Sem6 from './components/Sem6';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <main>
      <>
      
        <Routes>
        <Route path="/" element={<Event/>} extact></Route>
        <Route path="/events" element={<Home/>} extact></Route>
        <Route path="/form" element={<Form1/>} extact></Route>
        <Route path="/form1" element={<Form2/>} extact></Route>
        <Route path="/form2" element={<Form3/>} extact></Route>
        <Route path="/form3" element={<Form4/>} extact></Route>
        <Route path="/form4" element={<Form5/>} extact></Route>
        <Route path="/form5" element={<Form6/>} extact></Route>
        <Route path="/fsem1" element={<FSem1/>} extact></Route>
        <Route path="/fsem2" element={<FSem2/>} extact></Route>
        <Route path="/fsem3" element={<FSem3/>} extact></Route>
        <Route path="/fsem4" element={<FSem4/>} extact></Route>
        <Route path="/fsem5" element={<FSem5/>} extact></Route>
        <Route path="/fsem6" element={<FSem6/>} extact></Route>
        <Route path="/course/:id" element={<Course/>} extact></Route>
        <Route path="/mock/:id" element={<Mock/>} extact></Route>
        <Route path="/master/:id" element={<Master/>} extact></Route>
        <Route path="/autionskill/:id" element={<AutionSkill/>} extact></Route>
        <Route path="/sparks/:id" element={<Sparks/>} extact></Route>
        <Route path="/eluctions/:id" element={<Eluction/>} extact></Route>
        <Route path="/sem1s/:id" element={<Sem1/>} extact></Route>
        <Route path="/sem2s/:id" element={<Sem2/>} extact></Route>
        <Route path="/sem3s/:id" element={<Sem3/>} extact></Route>
        <Route path="/sems/:id" element={<Sem/>} extact></Route>
        <Route path="/sem5s/:id" element={<Sem5/>} extact></Route>
        <Route path="/sem6s/:id" element={<Sem6/>} extact></Route>
        </Routes>
        <body>
          
        </body>
      </>
      </main>   
    
    
    </BrowserRouter>
   
    </>
  );
}

export default App;

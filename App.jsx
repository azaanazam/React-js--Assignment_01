import './App.css';
import Signup from './components/signup';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';



function App() {
  return(
    <>
<Routes>
  <Route path="/home" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/contact" element={<Contact />}></Route>
  <Route path="/" element={<Signup />}></Route>
  

</Routes>

   
    
    </>
  )
 }

 export default App;
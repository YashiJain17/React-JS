
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Users from './Components/Users';
import Posts from './Components/Posts';
import Postsfun from './Components/Postsfun';
import Userfun from './Components/Userfun';
import Counter from './Components/Counter';
import Reduxcounter from './Components/Reduxcounter';



function App() {
  return (
    <>
   <div>
   <Navbar/>
    <Router>
    
      <Routes>
        <Route path='/' exact element={<Home/>} />
        {/* <Route path='/users' element={<Users/>}/> */}
        <Route path='/users' element={<Userfun/>} />
        {/* <Route path='/posts' element={<Posts/>} /> */}
        <Route path='/posts' element={<Postsfun/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/reduxcounter' element={<Reduxcounter/>} />

       
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;

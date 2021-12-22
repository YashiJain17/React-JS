import {useState} from 'react'
import './App.css';
import Classcomp from './components/Classcomp';
import Usestateh from './components/Usestateh';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
    <input type="button" value={count} onClick={()=>setCount((prev)=> prev + 1)} />
    <Usestateh/>
    <br/>
    <br/>
    <Classcomp greet="hello"/>
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavbarCom from './Components/NavbarCom/NavbarCom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Todo from './Components/Todo/Todo';
import Counter from './Components/Counter/Counter';
import OnlineShop from './Components/OnlinShop/OnlineShop';
function App() {
  return (
    <div className="App">
     <Router>
      <NavbarCom/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project'/>
        <Route path='/todo' element={<Todo/>}/> 
        <Route path='/counter' element={<Counter/>}/> 
        <Route path='/onlinshop' element={<OnlineShop/>}/> 
      </Routes>
     </Router>
    </div>
  );
}

export default App;

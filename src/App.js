import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarCom from "./Components/NavbarCom/NavbarCom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Todo from "./Components/Todo/Todo";
import Counter from "./Components/Counter/Counter";
import OnlineShop from "./Components/OnlinShop/OnlineShop";
import Cart from "./Components/OnlinShop/Cart";
import Login from "./Components/Login/Login";
import Time from "./Components/Time/Time";
import PizaaMenu from "./Components/Pizaa-Menu/Pizaa-Menu";
import Test1 from "./Components/Test1/Test1";
import Flashcards from "./Components/FlashCards/Flashcards";
import DerivedState from "./Components/DerivedState/DerivedState";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarCom />
        <Time />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/onlinshop" element={<OnlineShop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Pizaamenu" element={<PizaaMenu />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/derivedstate" element={<DerivedState />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

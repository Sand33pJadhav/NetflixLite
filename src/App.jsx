import "./App.scss"
import Watch from "./pages/watch/Watch";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route exact path='/home' element={<Home/>} />
                <Route exact path='/register' element={<Register/>} />
                <Route exact path='/watch' element={<Watch/>} />
        </Routes>
      </div>
  );
}

export default App;

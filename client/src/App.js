import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CreateGame from './components/CreateGame/CreateGame.jsx';
import GameDetail from "./components/GameDetail/GameDetail.jsx"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
       <Route exact path= '/' element= {<LandingPage/>} />
        <Route path= '/home' element= {<Home/>} />
        <Route path= '/videogame' element= {<CreateGame/>} />
        <Route path= '/home/:id' element= {<GameDetail/>} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

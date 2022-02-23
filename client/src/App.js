import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateGame from './components/CreateGame';
import GameDetail from "./components/GameDetail"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
        <Route exact path= '/' component= {LandingPage} />
        <Route path= '/home' component= {Home} />
        <Route path= '/videogame' component= {CreateGame} />
        <Route path= '/home/:id' component= {GameDetail} />

    </div>
    </BrowserRouter>
  );
}

export default App;

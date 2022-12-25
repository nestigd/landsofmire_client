import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Game from './pages/Game';
import Lore from './pages/Lore';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';


function App() {
  return (

    <div className="App">
      <BrowserRouter>

      <Navbar/>
        <div className='pages'>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<Game/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/lore" element={<Lore/>}/>
            <Route path="/auth" element={<Auth/>}/>
          </Routes>

        </div>

      </BrowserRouter>
    </div>

  );
}

export default App;

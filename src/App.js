import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>NAVBAR GOES HERE</div>
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

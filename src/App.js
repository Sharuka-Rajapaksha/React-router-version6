import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      
      <h1>Static Content</h1>

        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Home/>}> </Route>
            <Route path = "/Profile" element={<Profile/>}> </Route>
            <Route path = "/About" element = {<About/>}></Route>
          </Routes>
        </BrowserRouter>


       

    </div>
  );
}

export default App;

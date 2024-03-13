
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './stores/pages/LandingPage';
import Computers from './stores/components/Computers';
import MobilePage from './stores/pages/MobilePage';
import MobileSinglePage from './stores/single/MobileSinglePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<LandingPage/>}/>
        <Route path='/mobiles'  element={<MobilePage/>}/>
        <Route path='/computers'  element={<Computers/>}/>
          <Route  path='mobiles/:id' element={<MobileSinglePage/>} />
      </Routes>
       
    </div>
  );
}

export default App;

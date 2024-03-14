 
import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage';
import MobilePage from './stores/pages/MobilePage';
import MobileDeatils from './stores/singles/MobileDeatils';
import Customer from './stores/singles/Customer';

function App() {
  return (
    <div className="App">
      <Routes>
           <Route path='/'  element={<LandingPage/>}/>
           <Route path='/mobiles'  element={<MobilePage/>}/>
           <Route path='/mobiles/:id'  element={<MobileDeatils/>}/>
           <Route path='/cart'  element={<Customer/>}/>

           

      </Routes>
          
    </div>
  );
}

export default App;

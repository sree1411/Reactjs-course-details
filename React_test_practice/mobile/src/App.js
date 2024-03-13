 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {LandingPage} from './store/pages/LandingPage';
import MobileSinglePage from './store/pages/MobileSinglePage';
import MobileInfoPage from './store/pages/MobileInfoPage';

import Cart from './store/pages/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<LandingPage/>} />
        <Route path='/mobile'  element={<MobileSinglePage/>} />
         <Route  path='/mobile/:id' element={<MobileInfoPage/>}/>
         <Route path='/cart'  element={<Cart/>} />

      </Routes>
       
    </div>
  );
}

export default App;

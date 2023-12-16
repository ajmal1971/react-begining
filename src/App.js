import './App.css';
import { ClassComp } from './ClassComp';
import UseEffect from './UseEffect';
import Fragment from './Fragment';
import LiftingStateUp from './LiftingStateUp';
import UseMemo from './UseMemo';
import Ref from './Ref';
import HigherOrderComponents from './HigherOrderComponents';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page404 from './Page404';
import Nav from './Nav';
import APICalling from './APICalling';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';
import CartHome from './AddToCartApp/CartHome';
import { CartProvider } from './contexts/CartContext';

function App() {

  let mobiles = [
    { id: 1, img: 'logo192.png', model: 'Model 1', price: '10000' },
    { id: 2, img: 'logo192.png', model: 'Model 2', price: '13000' },
    { id: 3, img: 'logo192.png', model: 'Model 3', price: '15500' },
    { id: 4, img: 'logo192.png', model: 'Model 4', price: '25000' },
    { id: 5, img: 'logo192.png', model: 'Model 5', price: '17900' },
    { id: 6, img: 'logo192.png', model: 'Model 6', price: '16000' },
    { id: 7, img: 'logo192.png', model: 'Model 7', price: '14300' },
    { id: 8, img: 'logo192.png', model: 'Model 8', price: '10500' }
  ];

  const [themeMode, setThemeMode] = useState('dark');
  const [modeLabel, setModeLabel] = useState('Dark');
  const [selectedMobiles, setSelectedMobiles] = useState([]);

  function switchTheme(selectedMode) {
    if (selectedMode === 'dark') {
      setThemeMode('light');
      setModeLabel('Light');
    } else {
      setThemeMode('dark');
      setModeLabel('Dark');
    }
  }

  useEffect(() => {
    const appElem = document.getElementsByClassName('App')[0];
    appElem.classList.remove('dark', 'light');
    appElem.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, modeLabel, switchTheme }}>
      <CartProvider value={{ mobiles, selectedMobiles, setSelectedMobiles }}>
        <div className="App dark">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/add-to-cart' element={<CartHome />}></Route>
            <Route path='/tutorials/class-component' element={<ClassComp />} />
            <Route path='/tutorials/use-effect' element={<UseEffect />} />
            <Route path="/tutorials/Fragment" element={<Fragment />} />
            <Route path="/tutorials/lifting-state-up" element={<LiftingStateUp />} />
            <Route path="/tutorials/use-memo" element={<UseMemo />} />
            <Route path="/tutorials/use-ref" element={<Ref />} />
            <Route path="/tutorials/higher-order-components" element={<HigherOrderComponents />} />
            <Route path="/tutorials/api-calling" element={<APICalling />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

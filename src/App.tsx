import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Home from './pages/home/Home.tsx';
import Oferta from './pages/oferta/Oferta.tsx';
import Privacy from './pages/privacy/Privacy.tsx';
import Checkout from './pages/checkout/Checkout.tsx';
import CheckoutSuccess from './pages/checkout/CheckoutSuccess.tsx';

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/oferta" element={<Oferta/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/checkout/success" element={<CheckoutSuccess/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App

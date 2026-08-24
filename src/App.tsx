import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {lazy, Suspense, useEffect} from 'react';
import Home from './pages/home/Home.tsx';

// Тяжёлые текстовые страницы грузим отдельными чанками — они не нужны посетителю главной
const Oferta = lazy(() => import('./pages/oferta/Oferta.tsx'));
const Privacy = lazy(() => import('./pages/privacy/Privacy.tsx'));
const Checkout = lazy(() => import('./pages/checkout/Checkout.tsx'));
const CheckoutSuccess = lazy(() => import('./pages/checkout/CheckoutSuccess.tsx'));
const ZapretkiTvicha = lazy(() => import('./pages/zapretki-tvicha/ZapretkiTvicha.tsx'));
const Instrukciya = lazy(() => import('./pages/instrukciya/Instrukciya.tsx'));

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
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/oferta" element={<Oferta/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/checkout/success" element={<CheckoutSuccess/>}/>
                    <Route path="/zapretki-tvicha" element={<ZapretkiTvicha/>}/>
                    <Route path="/instrukciya" element={<Instrukciya/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App

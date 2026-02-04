
import './App.css'
import Banner from "./components/banner/Banner.tsx";
import Advise from "./components/advise/Advise.tsx";
import Robot from "./components/robot/Robot.tsx";
import Feedback from "./components/feedback/Feedback.tsx";
import Footer from "./components/footer/Footer.tsx";
import HowItWorks from "./components/hiw/HowItWorks.tsx";
import Payments from "./components/payments/Payments.tsx";
// import Reviews from "./components/reviews/Reviews.tsx";

function App() {


  return (
    <div className='container'>
            <Banner/>
            <Advise/>
            <Robot/>
        <HowItWorks/>
        <Payments/>
        {/*<Reviews/> блок с отзывами выключен(раскомментируй блок)*/}
            <Feedback/>
            <Footer/>

    </div>
  )
}

export default App

import Banner from "../../components/banner/Banner.tsx";
import Advise from "../../components/advise/Advise.tsx";
import Robot from "../../components/robot/Robot.tsx";
import Feedback from "../../components/feedback/Feedback.tsx";
import Footer from "../../components/footer/Footer.tsx";
import HowItWorks from "../../components/hiw/HowItWorks.tsx";
import Payments from "../../components/payments/Payments.tsx";

const Home = () => {
    return (
        <div className='container'>
            <Banner/>
            <Advise/>
            <Robot/>
            <HowItWorks/>
            <Payments/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;

import {useEffect} from "react";
import Banner from "../../components/banner/Banner.tsx";
import Advise from "../../components/advise/Advise.tsx";
import Robot from "../../components/robot/Robot.tsx";
import Feedback from "../../components/feedback/Feedback.tsx";
import Footer from "../../components/footer/Footer.tsx";
import HowItWorks from "../../components/hiw/HowItWorks.tsx";
import Payments from "../../components/payments/Payments.tsx";

const schemas = [
    {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SpeechShield",
        "description": "Приложение для Windows, которое автоматически фильтрует запретки на стриме через OBS в реальном времени. Защита канала на Twitch и YouTube от бана за мат.",
        "url": "https://speechshield.ru/",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Windows",
        "offers": [
            {"@type": "Offer", "price": "0", "priceCurrency": "RUB", "name": "Free", "description": "20 часов в месяц"},
            {"@type": "Offer", "price": "299", "priceCurrency": "RUB", "name": "Стандарт", "description": "Для активных стримеров"},
            {"@type": "Offer", "price": "499", "priceCurrency": "RUB", "name": "Pro", "description": "Для профессионалов и студий"}
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Как SpeechShield защищает стрим от запреток?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SpeechShield использует AI-распознавание речи для обнаружения и автоматического заглушения запреток в реальном времени. Приложение интегрируется с OBS и работает незаметно для зрителей."
                }
            },
            {
                "@type": "Question",
                "name": "SpeechShield работает с Twitch и YouTube?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, SpeechShield работает с любой стриминговой платформой — Twitch, YouTube, Discord и другими, так как фильтрация происходит на уровне OBS до отправки аудио."
                }
            },
            {
                "@type": "Question",
                "name": "Есть ли бесплатный тариф?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, бесплатный тариф включает 20 часов фильтрации в месяц — достаточно, чтобы попробовать и оценить работу программы."
                }
            }
        ]
    }
];

const Home = () => {
    useEffect(() => {
        const scriptEls: HTMLScriptElement[] = [];
        schemas.forEach(schema => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
            scriptEls.push(script);
        });

        return () => {
            scriptEls.forEach(s => s.remove());
        };
    }, []);

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

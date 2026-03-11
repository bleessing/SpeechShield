import {Link, useSearchParams} from 'react-router-dom';
import styles from './CheckoutSuccess.module.css';
import Header from "../../components/header/Header.tsx";

const planNames: Record<string, string> = {
    standard: 'Стандарт',
    pro: 'Pro',
};

const CheckoutSuccess = () => {
    const [searchParams] = useSearchParams();
    const planKey = searchParams.get('plan') || 'standard';
    const email = searchParams.get('email') || '';
    const planName = planNames[planKey] || planNames.standard;

    return (
        <div className={styles.page}>
            <Header/>

            <main className={styles.content}>
                <div className={styles.card}>
                    <svg className={styles.icon} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="36" cy="36" r="36" fill="#22C55E"/>
                        <path d="M22 36L32 46L50 28" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <h1 className={styles.title}>Оплата прошла успешно</h1>
                    <p className={styles.subtitle}>Тариф &laquo;{planName}&raquo;</p>
                    <p className={styles.emailText}>Код активации отправлен на {email}</p>

                    <Link to="/" className={styles.homeBtn}>На главную</Link>
                </div>
            </main>

            <footer className={styles.footer}>
                &copy; 2026 SpeechShield. Все права защищены.
            </footer>
        </div>
    );
};

export default CheckoutSuccess;

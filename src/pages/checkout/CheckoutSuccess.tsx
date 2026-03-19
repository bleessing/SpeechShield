import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './CheckoutSuccess.module.css';
import Header from "../../components/header/Header.tsx";

const planNames: Record<string, string> = {
    standard: 'Стандарт',
    pro: 'Pro',
};

const CheckoutSuccess = () => {
    const [status, setStatus] = useState<'loading' | 'succeeded' | 'pending' | 'canceled' | 'error'>('loading');
    const [planType, setPlanType] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const paymentId = localStorage.getItem('payment_id');
        if (!paymentId) {
            setStatus('error');
            return;
        }

        const checkStatus = async () => {
            try {
                const res = await fetch(`https://speechshield.ru/api/payments/${paymentId}/status`);
                if (!res.ok) {
                    setStatus('error');
                    return;
                }
                const data = await res.json();
                setStatus(data.status);
                setPlanType(data.plan_type || '');
            } catch {
                setStatus('error');
            }
        };

        checkStatus();

        // Poll every 3 seconds if still pending
        const interval = setInterval(async () => {
            try {
                const res = await fetch(`https://speechshield.ru/api/payments/${paymentId}/status`);
                if (res.ok) {
                    const data = await res.json();
                    setStatus(data.status);
                    setPlanType(data.plan_type || '');
                    if (data.status !== 'pending') {
                        clearInterval(interval);
                    }
                }
            } catch { /* ignore */ }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Try to get email from URL params (legacy) or just show generic message
        const params = new URLSearchParams(window.location.search);
        setEmail(params.get('email') || '');
    }, []);

    const planName = planNames[planType] || planType;

    return (
        <div className={styles.page}>
            <Header/>

            <main className={styles.content}>
                <div className={styles.card}>
                    {status === 'loading' && (
                        <>
                            <h1 className={styles.title}>Проверяем оплату...</h1>
                            <p className={styles.subtitle}>Пожалуйста, подождите</p>
                        </>
                    )}

                    {status === 'succeeded' && (
                        <>
                            <svg className={styles.icon} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="36" cy="36" r="36" fill="#22C55E"/>
                                <path d="M22 36L32 46L50 28" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <h1 className={styles.title}>Оплата прошла успешно</h1>
                            {planName && <p className={styles.subtitle}>Тариф &laquo;{planName}&raquo;</p>}
                            <p className={styles.emailText}>
                                Ключ активации отправлен на {email || 'указанный email'}
                            </p>
                        </>
                    )}

                    {status === 'pending' && (
                        <>
                            <h1 className={styles.title}>Ожидаем подтверждение оплаты</h1>
                            <p className={styles.subtitle}>Обычно это занимает несколько секунд</p>
                        </>
                    )}

                    {status === 'canceled' && (
                        <>
                            <h1 className={styles.title}>Оплата отменена</h1>
                            <p className={styles.subtitle}>Вы можете попробовать ещё раз</p>
                        </>
                    )}

                    {status === 'error' && (
                        <>
                            <h1 className={styles.title}>Ошибка</h1>
                            <p className={styles.subtitle}>Не удалось проверить статус оплаты</p>
                        </>
                    )}

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

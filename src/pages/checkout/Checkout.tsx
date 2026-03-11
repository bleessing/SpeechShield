import {useState, useMemo} from 'react';
import {Link, useSearchParams, useNavigate} from 'react-router-dom';
import styles from './Checkout.module.css';
import ok from '../../assets/icons/Group.svg';
import Header from "../../components/header/Header.tsx";

interface PlanData {
    name: string;
    monthlyPrice: number;
    annualPrice: number;
    features: string[];
}

const plans: Record<string, PlanData> = {
    standard: {
        name: 'Стандарт',
        monthlyPrice: 299,
        annualPrice: 2390,
        features: [
            'Защита голоса в реальном времени',
            'Работа с OBS Studio',
            'Обработка нескольких источников звука',
            'Офлайн-обработка файлов (до 3 в месяц)',
            'Статистика срабатываний',
        ],
    },
    pro: {
        name: 'Pro',
        monthlyPrice: 499,
        annualPrice: 3990,
        features: [
            'Всё из тарифа Стандарт',
            'Безлимитная офлайн-обработка файлов',
            'Приоритетная поддержка',
        ],
    },
};

const Checkout = () => {
    const [searchParams] = useSearchParams();
    const planKey = searchParams.get('plan') || 'standard';
    const plan = plans[planKey] || plans.standard;

    const navigate = useNavigate();
    const [isAnnual, setIsAnnual] = useState(false);
    const [email, setEmail] = useState('');
    const [ofertaChecked, setOfertaChecked] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const periodLabel = isAnnual ? 'год' : 'месяц';

    const isEmailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [email]);
    const isFormValid = isEmailValid && ofertaChecked && privacyChecked;

    const handleSubmit = () => {
        if (!isFormValid) return;
        navigate(`/checkout/success?plan=${planKey}&email=${encodeURIComponent(email)}`);
    };

    return (
        <div className={styles.page}>
            <Header/>

            <main className={styles.content}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Оформление подписки</h1>
                    <p className={styles.subtitle}>Тариф «{plan.name}»</p>
                </div>

                {/* Tariff card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.cardTitle}>{plan.name}</h2>
                        <div className={styles.priceBlock}>
                            <span className={styles.price}>{price} ₽</span>
                            <span className={styles.pricePeriod}>/ {periodLabel}</span>
                        </div>
                    </div>

                    {/* Period toggle */}
                    <div className={styles.toggle}>
                        <button
                            className={`${styles.toggleBtn} ${!isAnnual ? styles.toggleActive : ''}`}
                            onClick={() => setIsAnnual(false)}
                        >
                            Месяц
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${isAnnual ? styles.toggleActive : ''}`}
                            onClick={() => setIsAnnual(true)}
                        >
                            Год <span className={styles.saveBadge}>-33%</span>
                        </button>
                    </div>

                    <ul className={styles.features}>
                        {plan.features.map((f, i) => (
                            <li key={i} className={styles.featureItem}>
                                <img src={ok} alt="" className={styles.featureIcon}/>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Payment form */}
                <div className={styles.form}>
                    <label className={styles.label}>
                        Email
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className={styles.inputHint}></span>
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            checked={ofertaChecked}
                            onChange={(e) => setOfertaChecked(e.target.checked)}
                        />
                        <span>
                            Я согласен с{' '}
                            <Link to="/oferta" target="_blank">Публичной офертой</Link>
                        </span>
                    </label>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            checked={privacyChecked}
                            onChange={(e) => setPrivacyChecked(e.target.checked)}
                        />
                        <span>
                            Я согласен с{' '}
                            <Link to="/privacy" target="_blank">Политикой конфиденциальности</Link>
                        </span>
                    </label>

                    <button
                        className={styles.payBtn}
                        disabled={!isFormValid}
                        onClick={handleSubmit}
                    >
                        Оплатить {price} ₽
                    </button>

                    <p className={styles.hint}>
                        После оплаты лицензионный ключ будет отправлен на указанный email
                    </p>
                </div>
            </main>

            <footer className={styles.footer}>
                &copy; 2026 SpeechShield. Все права защищены.
            </footer>
        </div>
    );
};

export default Checkout;

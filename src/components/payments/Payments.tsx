import { useNavigate } from 'react-router-dom'
import styles from './Payments.module.css'
import ok from '../../assets/icons/Group.svg'
import close from '../../assets/icons/close.svg'

interface Feature {
    id: number;
    text: string;
    available: boolean;
}

interface Plan {
    id: number;
    name: string;
    price: number;
    period: string;
    annualPrice?: number;
    description?: string;
    features: Feature[];
    badge?: string;
    isPopular?: boolean;
    buttonText: string;
    buttonAction: () => void;
}

const Payments = () => {
    const navigate = useNavigate();
    const plans: Plan[] = [
        {
            id: 1,
            name: "Free",
            price: 0,
            period: "20 часов / месяц",
            description: "Попробовать перед покупкой",
            features: [
                { id: 1, text: "Защита голоса в реальном времени", available: true },
                { id: 2, text: "Работа с OBS Studio", available: true },
                { id: 3, text: "Обработка нескольких источников звука", available: false },
                { id: 4, text: "Офлайн-обработка файлов", available: false },
                { id: 5, text: "Статистика срабатываний", available: false },
            ],
            buttonText: "Скачать бесплатно",
            buttonAction: () => {
                const link = document.createElement('a');
                link.href = 'https://speechshield.ru/api/downloads/file';
                link.download = '';
                link.click();
            }
        },
        {
            id: 2,
            name: "Стандарт",
            price: 299,
            period: "месяц",
            annualPrice: 2390,
            isPopular: true,
            badge: "Популярный",
            description: "Для активных стримеров",
            features: [
                { id: 1, text: "Защита голоса в реальном времени", available: true },
                { id: 2, text: "Работа с OBS Studio", available: true },
                { id: 3, text: "Обработка нескольких источников звука", available: true },
                { id: 4, text: "Офлайн-обработка файлов (до 3 в месяц)", available: true },
                { id: 5, text: "Статистика срабатываний", available: true },
            ],
            buttonText: "Оформить подписку",
            buttonAction: () => {
                navigate('/checkout?plan=standard');
            }
        },
        {
            id: 3,
            name: "Pro",
            price: 499,
            period: "месяц",
            annualPrice: 3990,
            badge: "Максимум",
            description: "Для профессионалов и студий",
            features: [
                { id: 1, text: "Всё из тарифа Стандарт", available: true },
                { id: 2, text: "Безлимитная офлайн-обработка файлов", available: true },
                { id: 3, text: "Приоритетная поддержка", available: true },
            ],
            buttonText: "Оформить подписку",
            buttonAction: () => {
                navigate('/checkout?plan=pro');
            }
        }
    ];

    return (
        <div id="payments" className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>Выберите подходящий тариф</h2>
                <p className={styles.subtitle}>Начните бесплатно, обновитесь когда будете готовы</p>

                <div className={styles.cards_container}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${styles.card} ${plan.isPopular ? styles.card_popular : ''}`}
                        >
                            {plan.badge && (
                                <span className={styles.badge}>{plan.badge}</span>
                            )}

                            <h3 className={styles.card_title}>{plan.name}</h3>
                            {plan.description && (
                                <p className={styles.card_description}>{plan.description}</p>
                            )}

                            <div className={styles.price_container}>
                                {plan.price === 0 ? (
                                    <span className={styles.price_free}>Бесплатно</span>
                                ) : (
                                    <>
                                        <span className={styles.price}>{plan.price} ₽</span>
                                        <span className={styles.price_period}>/ {plan.period}</span>
                                    </>
                                )}
                            </div>

                            {plan.annualPrice && (
                                <p className={styles.annual_price}>
                                    или {plan.annualPrice} ₽/год <span className={styles.save_badge}>-33%</span>
                                </p>
                            )}

                            {plan.price === 0 && (
                                <p className={styles.limit_text}>{plan.period}</p>
                            )}

                            <ul className={styles.features_list}>
                                {plan.features.map((feature) => (
                                    <li key={feature.id} className={styles.feature_item}>
                                        <img
                                            src={feature.available ? ok : close}
                                            alt=""
                                            className={feature.available ? styles.icon_ok : styles.icon_close}
                                        />
                                        <span className={feature.available ? '' : styles.feature_disabled}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`${styles.button} ${plan.isPopular ? styles.button_primary : ''}`}
                                onClick={plan.buttonAction}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Payments;

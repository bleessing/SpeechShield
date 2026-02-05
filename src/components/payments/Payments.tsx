import styles from './Payments.module.css'
import gift from '../../assets/gift.svg'
import ok from '../../assets/icons/Group.svg';
const Payments = () => {
    const list = [{
        id:1,
        text: "Фильтрация в реальном времени",
        img: ok,
    }, {
        id:2,
        text: "Статистика срабатываний",
        img: ok,
    },
        {
            id:3,
            text: "Поддержка 24/7",
            img: ok,
        }, ]
    return (
        <div id="payments" className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>Подключите защиту репутации</h2>
                <div className={styles.card_parent}>
                    <div className={styles.card_wrapper}>
                        <div className={styles.card}>
                            <h3 className={styles.card_title}>Тариф стандарт
                            </h3>
                            <img className={styles.card_img} src={gift} alt={gift}/>
                            <h3 className={styles.list_title}>Пробный период 10 дней бесплатно — без привязки карты</h3>
                            <ul className={styles.list}>{
                                list.map((item) => {
                                    return (
                                        <li key={item.id} className={styles.list_item}>
                                            <img src={item.img}/>
                                            <p> {item.text}</p>
                                        </li>
                                    )
                                })
                            }

                            </ul>

                            <p className={styles.newPrice}>499 ₽ / месяц</p>
                            <p className={styles.prevPrice}>799 ₽ / месяц</p>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = 'https://speechshield.ru/api/downloads/file';
                                    link.download = '';
                                    link.click();
                                }}
                            >
                                Попробовать бесплатно
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Payments;
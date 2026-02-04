import micro from '../../assets/icons/micro.png'
import censure from '../../assets/icons/censure.png';
import graphic from '../../assets/icons/graphic.png';
import incognito from '../../assets/icons/incognito.png';
import language from '../../assets/icons/language.png';
import blackList from '../../assets/icons/black_list.png'

import styles from './Robot.module.css'
import robot from '../../assets/robot.png';

const Robot = () => {
    const cardData = [
        {
        id: 1,
        title: "Незаметно для зрителей",
        short: "Благодаря интеграции со сценами в OBS",
        img: incognito
    },
        {
            id: 2,
            title: "AI-распознавание речи",
            short: "Понимает контекст и вариации слов",
            img: micro
        },  {
            id: 3,
            title: "Автоматическая цензура",
            short: "Не нужно нажимать кнопки и отвлекаться",
            img: censure
        },  {
            id: 4,
            title: "Кастомизация",
            short: "Добавьте свои слова в черный список",
            img: blackList
        },  {
            id: 5,
            title: "Статистика",
            short: "Сколько раз была применена фильтрация",
            img: graphic
        },  {
            id: 6,
            title: "Русский язык ",
            short: "Создано для русскоязычных стримеров",
            img: language
        },
    ]
    return (
        <div id="robot">
            <div className={styles.container}>
                <h1 className={styles.title}>
                    <strong>
                        Почему SpeechShield
                        <br/>
                    </strong>
                    — идеален для стримеров?
                </h1>
                <div className={styles.sections}>
                    <div className={styles.section_wrapper}>
                    <div className={styles.section_left}>
                        <img className={styles.section_img} src={robot} alt={'robotBanner'} />
                    </div>
                    </div>
                    <div className={styles.section_right}>
                        {/*    тут расписатьмелкие карточки*/}
                        <ul className={styles.cards_list}>
                            {cardData.map((item) => {
                                return (
                                    <li key={item.id} className={styles.card_item}>
                                        <img src={item.img} alt={item.title} className={styles.card_img}/>
                                        <div className={styles.card_text}>
                                            <h3 className={styles.card_title}>{item.title}</h3>
                                            <p className={styles.card_short}>{item.short}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Robot;
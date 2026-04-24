import styles from './Advise.module.css'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
const Advise = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.container_inner}>
                    <h2 className={styles.container_title}>
                        Одна запретка
                        <br/>
                        <strong> &mdash;&nbsp;и&nbsp; стрим под угрозой</strong></h2>
                    <div className={styles.cards}>
                        <div className={styles.card} data-variant={'red'}>
                            <h2 className={styles.card_title}>Проблема</h2>
                            <p className={styles.card_description}>Одна случайная запретка в&nbsp;прямом эфире на&nbsp;Twitch или YouTube стоит вам монетизации, партнёрств и&nbsp;репутации. Ловить каждое слово невозможно, а&nbsp;бан за&nbsp;мат приходит мгновенно.</p>
                            <img className={styles.card_image} src={card1} alt="Проблема запреток на стриме — риск бана"/>
                            <div className={styles.card_label1} data-variant={'red'}>
                                <p className={styles.label1_text}>*#@!$%&</p>
                            </div>
                            <div className={styles.card_label2} data-variant={'red'}>
                                <p>!$%&*#@</p>
                            </div>

                        </div>
                        <div className={styles.card} data-variant={'green'}>
                            <h2 className={styles.card_title}>Решение</h2>
                            <p className={styles.card_description}>
                                <strong>SpeechShield </strong>
                                SpeechShield автоматически обнаруживает и&nbsp;заглушает запретки в&nbsp;реальном времени. Приложение работает с&nbsp;OBS&nbsp;&mdash; стримьте спокойно на&nbsp;Twitch и&nbsp;YouTube без риска бана.</p>
                            <img className={styles.card_image} src={card2} alt="SpeechShield — решение для фильтрации запреток"/>
                            <div className={styles.card_label1} data-variant={'green'}>
                                <p className={styles.label1_text}>*#@!$%&</p>
                            </div>
                            <div className={styles.card_label2} data-variant={'green'}>
                                <p>!$%&*#@</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advise;
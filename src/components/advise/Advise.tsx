import styles from './Advise.module.css'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
const Advise = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.container_inner}>
                    <h1 className={styles.container_title}>
                        Одна запретка
                        <br/>
                        <strong> &mdash;&nbsp;и&nbsp; стрим под угрозой</strong></h1>
                    <div className={styles.cards}>
                        <div className={styles.card} data-variant={'red'}>
                            <h2 className={styles.card_title}>Проблема</h2>
                            <p className={styles.card_description}>Одина случайная запретка в&nbsp;прямом эфире стоит вам монетизации, партнёрств и&nbsp;репутации. Ловить каждое слово невозможно, а&nbsp;стримкилеры постоянно норовят вас уловить.</p>
                            <img className={styles.card_image} src={card1}/>
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
                                SpeechShield автоматически обнаруживает и&nbsp;заглушает ненормативную лексику в&nbsp;реальном времени. Стримьте спокойно&nbsp;&mdash; программа спасёт вас от&nbsp;запреток..</p>
                            <img className={styles.card_image} src={card2}/>
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
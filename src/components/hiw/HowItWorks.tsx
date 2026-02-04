import styles from './HowItWorks.module.css';

interface Step {
    id: string;
    title: string;
    description: string;
    color: 'purple' | 'green';
}

const HowItWorks = () => {
    const steps1: Step[] = [
        {
            id: '1',
            title: 'Шаг 1',
            description: 'Загружаете приложение SpeechShield на компьютер',
            color: 'purple',
        },
        {
            id: '2',
            title: 'Шаг 2',
            description: 'Подключаете микрофон и аудио системы в настройках (2 клика)',
            color: 'green',
        },
        {
            id: '3',
            title: 'Шаг 3',
            description: 'Нажимаете «Старт» перед стримом',
            color: 'purple',
        }
    ];

    const steps2: Step[] = [
        {
            id: '4',
            title: 'Шаг 4',
            description: 'Приложение работает в фоне и автоматически заглушает нецензурную лексику',
            color: 'green',
        },
        {
            id: '5',
            title: 'Шаг 5',
            description: 'Ваши зрители ничего не подозревают — видят чистый контент',
            color: 'purple',
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>


                <div className={styles.grid}>
                    {/* Первый ряд */}
                    <div className={styles.row}>
                    <h2 className={styles.title}>Как работает платформа?</h2>
                        {steps1.map((step) => (
                            <div
                                key={step.id}
                                className={`${styles.step} ${step.color === 'purple' ? styles.stepPurple : styles.stepGreen}`}
                            >
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Второй ряд */}
                    <div className={styles.rowBottom}>
                        {steps2.map((step) => (
                            <div
                                key={step.id}
                                className={`${styles.step} ${step.color === 'purple' ? styles.stepPurple : styles.stepGreen}`}
                            >
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
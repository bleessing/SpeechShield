import styles from './Banner.module.css'
import banner from '../../assets/banner.png'
import Header from "../header/Header.tsx";
import useCheckMobileScreen from "../../hooks/useCheckMobile.ts";

const Banner = () => {
    const { isMobile } = useCheckMobileScreen();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://speechshield.ru/api/downloads/file';
        link.download = '';
        link.click();
    };

    return (
        <div id="banner">
            <Header/>
            <div className={styles.container}>
                {isMobile ? (
                    <div className={styles.wrapper_mobile}>
                        <img className={styles.banner_image_mobile} src={banner} alt="Баннер" />
                        <div className={styles.glass_card}>
                            <h1 className={styles.banner_title}>
                                <strong>SpeechShield</strong>&nbsp;&mdash; умная защита вашего стрима от&nbsp;запреток в&nbsp;реальном времени
                            </h1>
                            <p className={styles.banner_description}>
                                Автоматически фильтрует ненормативную лексику во&nbsp;время стрима и&nbsp;защищает ваш канал от&nbsp;блокировок
                            </p>
                            <button className={styles.button} onClick={handleDownload}>
                                Попробовать бесплатно
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.wrapper}>
                        <div className={styles.container_left}>
                            <h1 className={styles.banner_title}>
                                <strong>SpeechShield</strong>&nbsp;&mdash; умная защита вашего стрима от&nbsp;запреток в&nbsp;реальном времени
                            </h1>
                            <p className={styles.banner_description}>
                                Автоматически фильтрует ненормативную лексику во&nbsp;время стрима и&nbsp;защищает ваш канал от&nbsp;блокировок
                            </p>
                            <button className={styles.button} onClick={handleDownload}>
                                Попробовать бесплатно
                            </button>
                        </div>
                        <div className={styles.container_right}>
                            <img className={styles.banner_image} src={banner} alt="Баннер" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;
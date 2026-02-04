import styles from './Banner.module.css'
import banner from '../../assets/banner.png'
// если есть отдельная картинка
import Header from "../header/Header.tsx";
import useCheckMobileScreen from "../../hooks/useCheckMobile.ts";


const Banner = () => {
    const {isMobile} = useCheckMobileScreen();

    return (
        <div id="banner">
            <Header/>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.container_left}>
                        <h1 className={styles.banner_title}>
                            <strong>SpeechShield</strong> — умная защита вашего стрима
                            от {isMobile ? 'запреток' : 'запреток в реальном времени'}
                        </h1>
                        <p className={styles.banner_description}>
                            Автоматически фильтрует ненормативную лексику во время стрима и защищает ваш канал от блокировок
                        </p>
                        <div className={styles.buttons}>
                            <a
                                href="https://speechshield.ru/api/downloads/file"
                                className={styles.button_download}
                                download
                            >
                                Попробовать бесплатно
                            </a>
                        </div>
                    </div>
                    <div className={styles.container_right}>
                        <img className={styles.banner_image} src={banner} alt="Баннер" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
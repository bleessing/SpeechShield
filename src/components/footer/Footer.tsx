import styles from './Footer.module.css';
import logo from '../../assets/svg_icons/logo (2).svg'
import fsi from '../../assets/svg_icons/image.svg';
import useCheckMobileScreen from "../../hooks/useCheckMobile.ts";

const Footer = () => {
    const {isMobile} = useCheckMobileScreen()
    const items = [
        { id: 1, title: "О нас", href: "#banner" },
        { id: 2, title: "Преимущества", href: "#robot" },
        { id: 3, title: "Тарифы", href: "#payments" },
        { id: 4, title: "Поддержка", href: "#feedback" }
    ];
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {isMobile ? (
                    <>
                        <img src={logo}/>
                        <div
                            className={styles.reghtSide}>
                            <ul className={styles.menu_list}>
                                {items.map((item) => (
                                    <li key={item.id} className={styles.list_item}>
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <button className={styles.button}
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = 'https://fasie.ru/';
                                    link.target = '_blank';
                                    link.click();
                                }}>
                                <div className={styles.card}>
                                    <h3 className={styles.card_title}>Платформа разработана при поддержке</h3>
                                    <img src={fsi}/>
                                </div>
                            </button>
                        </div>
                        <p className={styles.additional}>© 2026 SpeechShield. Все права защищены.</p>
                    </>
                ) : <>
                    <div className={styles.leftSide}>
                        <img src={logo}/>
                        <p className={styles.additional}>© 2026 SpeechShield. Все права защищены.</p>
                    </div>
                    <div
                        className={styles.reghtSide}>
                        <ul className={styles.menu_list}>
                            {items.map((item) => (
                                <li key={item.id} className={styles.list_item}>
                                    <a href={item.href}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                        <button className={styles.button}
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = 'https://fasie.ru/';
                                    link.target = '_blank';
                                    link.click();
                                }}>
                            <div className={styles.card}>
                                <h3 className={styles.card_title}>Платформа разработана при поддержке</h3>
                                <img src={fsi}/>
                            </div>
                        </button>

                    </div>
                </>}

            </div>
        </div>
    );
};

export default Footer;
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/svg_icons/logo (2).svg'
import fsi from '../../assets/svg_icons/image.svg';
import utp from '../../assets/svg_icons/platforma-utp.png';
import useCheckMobileScreen from "../../hooks/useCheckMobile.ts";

const Footer = () => {
    const {isMobile} = useCheckMobileScreen()
    const items = [
        { id: 1, title: "О нас", href: "#banner" },
        { id: 2, title: "Преимущества", href: "#robot" },
        { id: 3, title: "Тарифы", href: "#payments" },
        { id: 4, title: "Поддержка", href: "#feedback" },

    ];
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {isMobile ? (
                    <>
                        <img src={logo} alt="SpeechShield логотип"/>
                        <div
                            className={styles.reghtSide}>
                            <ul className={styles.menu_list}>
                                {items.map((item) => (
                                    <li key={item.id} className={styles.list_item}>
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                ))}
                                <li className={styles.list_item}>
                                    <Link to="/oferta">Оферта</Link>
                                </li>
                                <li className={styles.list_item}>
                                    <Link to="/privacy">Конфиденциальность</Link>
                                </li>
                                <li className={styles.list_item}>
                                    <Link to="/zapretki-tvicha">Запретки Twitch</Link>
                                </li>
                                <li className={styles.list_item}>
                                    <Link to="/instrukciya">Инструкция</Link>
                                </li>
                            </ul>
                            <div className={styles.card}>
                                <h3 className={styles.card_title}>Проект реализован при поддержке</h3>
                                <div className={styles.logos}>
                                    <a href="https://fasie.ru/" target="_blank" rel="noopener noreferrer">
                                        <img src={fsi} alt="Фонд содействия инновациям"/>
                                    </a>
                                    <a href="https://univertechpred.ru/" target="_blank" rel="noopener noreferrer">
                                        <img className={styles.utp} src={utp} alt="Платформа университетского технологического предпринимательства"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                ) : <div className={styles.section_wrapper}>
                        <div
                        className={styles.rightSide}>
                        <ul className={styles.menu_list}>
                            {items.map((item) => (
                                <li key={item.id} className={styles.list_item}>
                                    <a href={item.href}>{item.title}</a>
                                </li>
                            ))}
                            <li className={styles.list_item}>
                                <Link to="/oferta">Оферта</Link>
                            </li>
                            <li className={styles.list_item}>
                                <Link to="/privacy">Конфиденциальность</Link>
                            </li>
                            <li className={styles.list_item}>
                                <Link to="/zapretki-tvicha">Запретки Twitch</Link>
                            </li>
                        </ul>


                    </div>
                    <div className={styles.leftSide}>
                        <img src={logo} alt="SpeechShield логотип"/>

                    </div>
                    <div className={styles.card}>
                            <h3 className={styles.card_title}>Проект реализован при поддержке</h3>
                            <div className={styles.logos}>
                                <a href="https://fasie.ru/" target="_blank" rel="noopener noreferrer">
                                    <img src={fsi} alt="Фонд содействия инновациям"/>
                                </a>
                                <a href="https://univertechpred.ru/" target="_blank" rel="noopener noreferrer">
                                    <img className={styles.utp} src={utp} alt="Платформа университетского технологического предпринимательства"/>
                                </a>
                            </div>
                        </div>

                </div>}
<p className={styles.additional}>© 2026 SpeechShield. Все права защищены.</p>
            </div>
        </div>
    );
};

export default Footer;
import styles from './Footer.module.css';
import logo from '../../assets/flogo.png'
import fsi from '../../assets/FSI.png';
import useCheckMobileScreen from "../../hooks/useCheckMobile.ts";

const Footer = () => {
    const {isMobile} = useCheckMobileScreen()
    const items = [{
        id: 1,
        title: "О нас",
        href: "#about"
    },
        {
            id: 2,
            title: "Преимущества",
            href: "#advantages"
        },
        {
            id: 3,
            title: "Тарифы",
            href: "#pricing"
        },
        {
            id: 4,
            title: "Поддержка",
            href: "#support"
        }
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {isMobile ? (
                    <>
                        <img src={logo}/>
                        <div
                            className={styles.reghtSide}>
                            <ul className={styles.menu_list}>
                                {items.map((item) => {
                                    return <li key={item.id} className={styles.list_item}>
                                        {item.title}
                                    </li>
                                })}
                            </ul>
                            <div className={styles.card}>
                                <h3 className={styles.card_title}>Платформа разработана при поддержке</h3>
                                <img src={fsi}/>
                            </div>
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
                            {items.map((item) => {
                                return <li key={item.id} className={styles.list_item}>
                                    {item.title}
                                </li>
                            })}
                        </ul>
                        <div className={styles.card}>
                            <h3 className={styles.card_title}>Платформа разработана при поддержке</h3>
                            <img src={fsi}/>
                        </div>
                    </div>
                </>}

            </div>
        </div>
    );
};

export default Footer;
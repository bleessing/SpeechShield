import { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const items = [
        { id: 1, title: "О нас", href: "#banner" },
        { id: 2, title: "Преимущества", href: "#robot" },
        { id: 3, title: "Тарифы", href: "#payments" },
        { id: 4, title: "Поддержка", href: "#feedback" }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className={styles.header}>
                    <a href="#" className={styles.logo_link}>
                        <img className={styles.logo} src={logo} alt="SpeechShield" />
                    </a>

                <ul className={styles.menu_list}>
                    {items.map((item) => (
                        <li key={item.id} className={styles.list_item}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <button className={styles.burger} onClick={toggleMenu} aria-label="Меню">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Мобильное меню */}
            <div className={`${styles.mobile_menu} ${isMenuOpen ? styles.mobile_menu_open : ''}`}>
                <div className={styles.mobile_header}>
                    <a href="#" className={styles.logo_link} onClick={closeMenu}>
                        <img className={styles.logo} src={logo} alt="SpeechShield" />
                    </a>
                    <button className={styles.close_btn} onClick={closeMenu} aria-label="Закрыть">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <ul className={styles.mobile_menu_list}>
                    {items.map((item) => (
                        <li key={item.id} className={styles.mobile_list_item} onClick={closeMenu}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Header;
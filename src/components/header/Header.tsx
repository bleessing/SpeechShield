import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { id: 1, title: "О нас", anchor: "banner" },
        { id: 2, title: "Преимущества", anchor: "robot" },
        { id: 3, title: "Тарифы", anchor: "payments" },
        { id: 4, title: "Поддержка", anchor: "feedback" }
    ];

    const handleNavClick = (anchor: string) => {
        closeMenu();
        if (location.pathname === '/') {
            document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className={styles.header}>
                    <Link to="/" className={styles.logo_link}>
                        <img className={styles.logo} src={logo} alt="SpeechShield" />
                    </Link>

                <ul className={styles.menu_list}>
                    {items.map((item) => (
                        <li key={item.id} className={styles.list_item}>
                            <a href={`#${item.anchor}`} onClick={(e) => { e.preventDefault(); handleNavClick(item.anchor); }}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={styles.burger}
                    onClick={toggleMenu}
                    aria-label="Меню"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Мобильное меню */}
            <div id="mobile-menu" className={`${styles.mobile_menu} ${isMenuOpen ? styles.mobile_menu_open : ''}`} aria-hidden={!isMenuOpen}>
                <div className={styles.mobile_header}>
                    <Link to="/" className={styles.logo_link} onClick={closeMenu}>
                        <img className={styles.logo} src={logo} alt="SpeechShield" />
                    </Link>
                    <button className={styles.close_btn} onClick={closeMenu} aria-label="Закрыть">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <ul className={styles.mobile_menu_list}>
                    {items.map((item) => (
                        <li key={item.id} className={styles.mobile_list_item}>
                            <a href={`#${item.anchor}`} onClick={(e) => { e.preventDefault(); handleNavClick(item.anchor); }}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Header;

import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './ZapretkiTvicha.module.css';

declare global {
    interface Window {
        ym?: (id: number, method: string, target: string) => void;
    }
}

const YM_ID = 102179873;

const sendGoal = (target: string) => {
    if (window.ym) window.ym(YM_ID, 'reachGoal', target);
};

const handleDownload = () => {
    sendGoal('zapretki_cta_download');
    const link = document.createElement('a');
    link.href = 'https://api.speechshield.ru/downloads/file';
    link.download = '';
    link.click();
};

const ZapretkiTvicha = () => {
    useEffect(() => {
        document.title = 'Запретки Твича в 2026: полный список слов за бан | SpeechShield';

        const setMeta = (name: string, content: string, property?: boolean) => {
            const attr = property ? 'property' : 'name';
            let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.content = content;
        };

        setMeta('description', 'Актуальный список запреток Twitch 2026 по категориям. Узнайте, за какие слова банят стримеров, и как защитить канал с помощью SpeechShield.');
        setMeta('keywords', 'запретки твича, запретка твич, запрещенные слова twitch, список запреток, бан на твиче, защита стрима');
        setMeta('og:title', 'Запретки Твича 2026 — полный список слов за бан', true);
        setMeta('og:description', 'Актуальная база запреток Twitch. Защитите канал от бана с SpeechShield.', true);
        setMeta('og:image', 'https://speechshield.ru/og/zapretki-tvicha.jpg', true);
        setMeta('og:image:secure_url', 'https://speechshield.ru/og/zapretki-tvicha.jpg', true);
        setMeta('og:image:type', 'image/jpeg', true);
        setMeta('og:image:width', '1102', true);
        setMeta('og:image:height', '630', true);
        setMeta('og:image:alt', 'Запретки Твича 2026: защита стрима от бана с SpeechShield', true);
        setMeta('og:url', 'https://speechshield.ru/zapretki-tvicha', true);
        setMeta('og:type', 'article', true);
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:image', 'https://speechshield.ru/og/zapretki-tvicha.jpg');

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://speechshield.ru/zapretki-tvicha';

        const schemas = [
            {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Все запретки Твича в 2026: полный список слов, за которые банят",
                "description": "Актуальный список запреток Twitch 2026 по категориям. Узнайте, за какие слова банят стримеров.",
                "image": "https://speechshield.ru/og/zapretki-tvicha.jpg",
                "author": {"@type": "Organization", "name": "SpeechShield", "url": "https://speechshield.ru"},
                "publisher": {
                    "@type": "Organization",
                    "name": "SpeechShield",
                    "logo": {"@type": "ImageObject", "url": "https://speechshield.ru/siteLogo.svg"}
                },
                "datePublished": "2026-04-24",
                "dateModified": "2026-04-24",
                "mainEntityOfPage": "https://speechshield.ru/zapretki-tvicha"
            },
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Что такое запретка простыми словами?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Запретка — это слово или фраза, за которые Twitch или другая стриминговая платформа может выдать бан. Это оскорбления по расе, ориентации, национальности, угрозы и другой hate speech."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Банят ли на Twitch за одно матерное слово?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Обычный мат формально не запрещён на Twitch — его можно использовать для экспрессии. Но если мат направлен на человека или содержит банворд (расовое, гомофобное оскорбление), бан может быть мгновенным."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Как узнать, что именно я сказал запретку?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Twitch не всегда указывает конкретное слово. Вы получите уведомление о нарушении с общей формулировкой «hate speech». SpeechShield ведёт статистику срабатываний — вы видите, какие слова были заглушены."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Можно ли оспорить бан на Twitch?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Да, через Twitch Appeals Portal (appeals.twitch.tv). Рассмотрение занимает от нескольких дней до нескольких недель. Успех зависит от тяжести нарушения и истории аккаунта."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Работают ли запретки задним числом (на старых VOD)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Да. Twitch анализирует VOD-записи с помощью AI, и стримеры получали баны через дни и даже недели после стрима. SpeechShield фильтрует речь до записи — в VOD запретки не попадают."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Отличаются ли запретки на Twitch и YouTube?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "YouTube менее строг к речи, но наказывает за hate speech отключением монетизации. Twitch банит аккаунт целиком. SpeechShield работает с обеими платформами через OBS."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Как SpeechShield помогает избежать бана?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SpeechShield использует AI для распознавания речи в реальном времени и автоматически заглушает запретки до попадания в эфир. База содержит 90+ слов и 70+ паттернов, покрывающих все словоформы."
                        }
                    }
                ]
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://speechshield.ru/"},
                    {"@type": "ListItem", "position": 2, "name": "База запреток", "item": "https://speechshield.ru/zapretki-tvicha"},
                    {"@type": "ListItem", "position": 3, "name": "Запретки Twitch"}
                ]
            }
        ];

        const scriptEls: HTMLScriptElement[] = [];
        schemas.forEach(schema => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
            scriptEls.push(script);
        });

        // Scroll tracking
        let sent50 = false, sent100 = false;
        const handleScroll = () => {
            const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrolled >= 0.5 && !sent50) {
                sent50 = true;
                sendGoal('zapretki_scroll_50');
            }
            if (scrolled >= 0.95 && !sent100) {
                sent100 = true;
                sendGoal('zapretki_scroll_100');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            scriptEls.forEach(s => s.remove());
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onCategoryToggle = () => sendGoal('zapretki_category_expanded');
    const onFaqToggle = () => sendGoal('zapretki_faq_opened');

    return (
        <div className={styles.page}>
            <Header/>
            <article className={styles.article}>

                {/* Блок 1 — Хлебные крошки */}
                <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
                    <Link to="/">Главная</Link>
                    <span className={styles.breadcrumb_sep}>/</span>
                    <span>Запретки Twitch</span>
                </nav>

                {/* Блок 2 — H1 + lead */}
                <h1 className={styles.h1}>
                    Все запретки Твича в&nbsp;2026: полный список слов, за&nbsp;которые банят
                </h1>
                <p className={styles.lead}>
                    Один случайный мат или оскорбление в&nbsp;прямом эфире может стоить стримеру
                    временной блокировки, потери партнёрки или полного бана канала. В&nbsp;этом
                    материале&nbsp;&mdash; актуальная база запреток Twitch на&nbsp;2026 год: что запрещают
                    правила платформы, как модерация находит нарушения, и&nbsp;как автоматически
                    защитить речь от&nbsp;запреток с&nbsp;помощью SpeechShield.
                </p>
                <div className={styles.meta}>
                    <time dateTime="2026-04-24">24 апреля 2026</time>
                    <span>15 мин чтения</span>
                </div>

                {/* Блок 3 — Содержание */}
                <nav className={styles.toc}>
                    <h2 className={styles.toc_title}>Содержание</h2>
                    <ol className={styles.toc_list}>
                        <li><a href="#what">Что такое запретка на Твиче</a></li>
                        <li><a href="#categories">Категории запреток на Twitch</a></li>
                        <li><a href="#how-twitch-finds">Как Twitch находит запретки</a></li>
                        <li><a href="#sanctions">Санкции: от предупреждения до permanent ban</a></li>
                        <li><a href="#how-to-protect">Как не попасть в бан: 5 способов защиты</a></li>
                        <li><a href="#speechshield">SpeechShield — защита речи от запреток</a></li>
                        <li><a href="#other-platforms">Запретки на других платформах</a></li>
                        <li><a href="#faq">Частые вопросы</a></li>
                    </ol>
                </nav>

                {/* Блок 4 — Что такое запретка */}
                <section id="what">
                    <h2 className={styles.h2}>Что такое запретка на Твиче</h2>
                    <p>
                        <strong>Запретка</strong> (банворд)&nbsp;&mdash; это слово или выражение, за&nbsp;произнесение
                        которого Twitch может выдать предупреждение, временный или перманентный бан канала. Термин
                        &laquo;запретка&raquo; прижился в&nbsp;русскоязычном стримерском сообществе
                        в&nbsp;начале 2020-х, когда Twitch начал массово ужесточать модерацию русскоязычного контента.
                    </p>
                    <p>
                        Изначально модерация Twitch была сфокусирована на&nbsp;англоязычном контенте.
                        С&nbsp;ростом русскоязычного сегмента платформа начала активно обучать AI-модерацию
                        на&nbsp;русском языке. Сегодня автоматическая система Twitch распознаёт запретки
                        на&nbsp;русском не&nbsp;хуже, чем на&nbsp;английском.
                    </p>
                    <p>
                        Важно: бан получает не&nbsp;только тот, кто написал запретку в&nbsp;чате, но&nbsp;и&nbsp;
                        <strong>стример, который произнёс запретку в&nbsp;эфире</strong>. Даже если это было
                        случайно, на&nbsp;эмоциях или спровоцировано донатом&nbsp;&mdash; ответственность лежит
                        на&nbsp;владельце канала. Именно поэтому запретки представляют главную угрозу для стримеров,
                        которые стримят без цензуры.
                    </p>
                    <p>
                        Согласно Community Guidelines, Twitch запрещает &laquo;высказывания ненависти
                        на&nbsp;основе расы, цвета кожи, этнической принадлежности, национального происхождения,
                        иммиграционного статуса, религии, пола, гендерной идентичности, сексуальной ориентации,
                        инвалидности, серьёзных медицинских заболеваний, статуса ветерана
                        и&nbsp;возраста&raquo;. На&nbsp;практике это означает сотни конкретных слов
                        и&nbsp;выражений на&nbsp;десятках языков.
                    </p>
                </section>

                {/* Блок 5 — Категории запреток */}
                <section id="categories">
                    <h2 className={styles.h2}>Категории запреток на&nbsp;Twitch</h2>
                    <p>
                        Мы проанализировали правила Twitch, случаи банов и&nbsp;составили классификацию
                        на&nbsp;основе базы SpeechShield, которая содержит <strong>более&nbsp;90&nbsp;запрещённых
                        слов</strong> и&nbsp;<strong>70+&nbsp;regex-паттернов</strong> для&nbsp;распознавания
                        всех словоформ.
                    </p>

                    {/* Категория 1 */}
                    <div className={styles.category}>
                        <h3 className={styles.h3}>1. Обсценная лексика (мат)</h3>
                        <div className={styles.severity_badge} data-level="medium">Warning &rarr; suspension 7 дней</div>
                        <p>
                            Мат на&nbsp;Twitch формально не&nbsp;запрещён для&nbsp;экспрессии эмоций. Однако
                            чрезмерное использование, мат в&nbsp;адрес конкретного человека или сочетание мата
                            с&nbsp;банвордами приводит к&nbsp;бану. Проблема в&nbsp;том, что на&nbsp;эмоциях
                            сложно контролировать, что именно вылетит. Один случайный банворд в&nbsp;потоке
                            мата&nbsp;&mdash; и&nbsp;канал получает страйк.
                        </p>
                        <details className={styles.details} onClick={onCategoryToggle}>
                            <summary className={styles.summary}>Примеры слов (цензурировано)</summary>
                            <ul className={styles.word_list}>
                                <li>б***ь и производные</li>
                                <li>х** и производные</li>
                                <li>п***а и производные</li>
                                <li>е***ь и производные</li>
                                <li>с***а</li>
                                <li>м***к и производные</li>
                                <li>г***о и производные</li>
                                <li>д***мо</li>
                                <li>ж***а</li>
                                <li>ш***а, ш***ва</li>
                            </ul>
                            <p className={styles.details_note}>
                                SpeechShield распознаёт все морфологические формы через 20+&nbsp;regex-паттернов.
                            </p>
                        </details>
                    </div>

                    {/* Категория 2 */}
                    <div className={styles.category}>
                        <h3 className={styles.h3}>2. Оскорбления по ориентации</h3>
                        <div className={styles.severity_badge} data-level="critical">Ban 7 дней &rarr; permanent</div>
                        <p>
                            Самая жёстко модерируемая категория. Любые гомофобные и&nbsp;трансфобные
                            оскорбления приводят к&nbsp;бану без&nbsp;предупреждений. Twitch относит их
                            к&nbsp;&laquo;разжиганию ненависти&raquo; (hate speech). Даже &laquo;шутливое&raquo;
                            использование не&nbsp;является оправданием.
                        </p>
                        <details className={styles.details} onClick={onCategoryToggle}>
                            <summary className={styles.summary}>Примеры слов (цензурировано)</summary>
                            <ul className={styles.word_list}>
                                <li>п***р и производные</li>
                                <li>п***к</li>
                                <li>г***к</li>
                                <li>г***сек</li>
                                <li>с***мит</li>
                            </ul>
                        </details>
                    </div>

                    {/* Категория 3 */}
                    <div className={styles.category}>
                        <h3 className={styles.h3}>3. Расовые оскорбления</h3>
                        <div className={styles.severity_badge} data-level="critical">Часто permanent ban</div>
                        <p>
                            N-word и&nbsp;его вариации&nbsp;&mdash; это гарантированный перманентный бан.
                            На&nbsp;русскоязычном Twitch также банят за&nbsp;расовые оскорбления на&nbsp;русском
                            языке. Модерация учитывает транслитерации, искажения и&nbsp;эвфемизмы.
                        </p>
                        <details className={styles.details} onClick={onCategoryToggle}>
                            <summary className={styles.summary}>Примеры слов (цензурировано)</summary>
                            <ul className={styles.word_list}>
                                <li>н***р и вариации</li>
                                <li>ч***а</li>
                                <li>ч***ан</li>
                                <li>ч***жоп и производные</li>
                                <li>ч***маз и производные</li>
                            </ul>
                        </details>
                    </div>

                    {/* Категория 4 */}
                    <div className={styles.category}>
                        <h3 className={styles.h3}>4. Национальные оскорбления</h3>
                        <div className={styles.severity_badge} data-level="high">Ban от 3 дней до permanent</div>
                        <p>
                            Уничижительные названия национальностей и&nbsp;этнических групп. Особенно
                            жёстко модерируются в&nbsp;контексте текущих событий. AI-модерация Twitch
                            часто срабатывает автоматически на&nbsp;само слово, независимо от&nbsp;контекста.
                        </p>
                        <details className={styles.details} onClick={onCategoryToggle}>
                            <summary className={styles.summary}>Примеры слов (цензурировано)</summary>
                            <ul className={styles.word_list}>
                                <li>х***л и производные</li>
                                <li>х** (нац. оскорбление)</li>
                                <li>ж** и производные</li>
                                <li>м***аль</li>
                                <li>к***п</li>
                                <li>у***глаз и производные</li>
                            </ul>
                        </details>
                    </div>

                    {/* Категория 5 */}
                    <div className={styles.category}>
                        <h3 className={styles.h3}>5. Оскорбления по инвалидности</h3>
                        <div className={styles.severity_badge} data-level="medium">Предупреждение &rarr; ban от 1 дня</div>
                        <p>
                            Эйблистские оскорбления&nbsp;&mdash; относительно новая категория, которую
                            Twitch начал активно модерировать в&nbsp;последние годы. Использование медицинских
                            терминов как оскорблений наказывается баном. Многие стримеры не&nbsp;подозревают,
                            что привычные &laquo;бытовые&raquo; оскорбления входят в&nbsp;эту категорию.
                        </p>
                        <details className={styles.details} onClick={onCategoryToggle}>
                            <summary className={styles.summary}>Примеры слов (цензурировано)</summary>
                            <ul className={styles.word_list}>
                                <li>д***н и производные</li>
                                <li>а***ст (как оскорбление)</li>
                                <li>д***л и производные</li>
                                <li>и***цил</li>
                                <li>о***френ</li>
                                <li>к***ин</li>
                            </ul>
                        </details>
                    </div>

                    {/* Категория 6 */}
                    <div className={styles.category}>
                        <h3 className={styles.h3}>6. Угрозы и призывы к насилию</h3>
                        <div className={styles.severity_badge} data-level="critical">Permanent ban + обращение в органы</div>
                        <p>
                            Прямые угрозы, призывы к&nbsp;суициду или насилию. Twitch передаёт такие
                            случаи в&nbsp;правоохранительные органы. Даже &laquo;шуточные&raquo; угрозы
                            могут привести к&nbsp;перманентному бану и&nbsp;реальным юридическим
                            последствиям.
                        </p>
                        <details className={styles.details} onClick={onCategoryToggle}>
                            <summary className={styles.summary}>Примеры слов (цензурировано)</summary>
                            <ul className={styles.word_list}>
                                <li>у***й, у***ю, у***ть</li>
                                <li>с***ни, п***хни</li>
                                <li>с***цид</li>
                                <li>с***убийство</li>
                            </ul>
                        </details>
                    </div>

                    <div className={styles.stats_grid}>
                        <div className={styles.stat_card}>
                            <span className={styles.stat_number}>90+</span>
                            <span className={styles.stat_label}>слов в базе</span>
                        </div>
                        <div className={styles.stat_card}>
                            <span className={styles.stat_number}>70+</span>
                            <span className={styles.stat_label}>regex-паттернов</span>
                        </div>
                        <div className={styles.stat_card}>
                            <span className={styles.stat_number}>7</span>
                            <span className={styles.stat_label}>категорий</span>
                        </div>
                        <div className={styles.stat_card}>
                            <span className={styles.stat_number}>1000+</span>
                            <span className={styles.stat_label}>словоформ</span>
                        </div>
                    </div>
                </section>

                {/* Блок 6 — Как Twitch находит запретки */}
                <section id="how-twitch-finds">
                    <h2 className={styles.h2}>Как Twitch находит запретки</h2>
                    <p>
                        Многие стримеры думают, что модерация работает только в&nbsp;реальном времени.
                        На&nbsp;самом деле Twitch использует несколько механизмов для обнаружения запреток,
                        и&nbsp;некоторые из&nbsp;них работают с&nbsp;задержкой.
                    </p>

                    <div className={styles.method_card}>
                        <h3 className={styles.h3}>AutoMod&nbsp;&mdash; автоматическая модерация чата</h3>
                        <p>
                            Встроенная система Twitch анализирует <strong>текстовый чат</strong> в&nbsp;реальном
                            времени. AutoMod использует машинное обучение для&nbsp;распознавания оскорблений
                            на&nbsp;десятках языков, включая русский. Важно: AutoMod <strong>не&nbsp;анализирует
                            речь стримера в&nbsp;прямом эфире</strong>&nbsp;&mdash; именно поэтому случайная
                            запретка в&nbsp;эфире часто проходит незамеченной до&nbsp;момента анализа VOD.
                        </p>
                    </div>

                    <div className={styles.method_card}>
                        <h3 className={styles.h3}>Ручные жалобы зрителей</h3>
                        <p>
                            Любой зритель может отправить жалобу (report) на&nbsp;стримера. При&nbsp;достаточном
                            количестве жалоб модераторы Twitch просматривают запись вручную. Это часто
                            используется для&nbsp;целенаправленного &laquo;сливания&raquo; стримеров&nbsp;&mdash;
                            стримкилеры провоцируют запретку, а&nbsp;затем массово жалуются.
                        </p>
                    </div>

                    <div className={styles.method_card}>
                        <h3 className={styles.h3}>AI-анализ VOD постфактум</h3>
                        <p>
                            Twitch анализирует VOD-записи с&nbsp;помощью AI уже после окончания стрима.
                            Стримеры получали баны через дни и&nbsp;даже недели после трансляции. Это
                            значит, что даже если запретка прошла незамеченной в&nbsp;эфире&nbsp;&mdash;
                            она всё равно может привести к&nbsp;бану. SpeechShield фильтрует речь до
                            записи, поэтому в&nbsp;VOD запретки не&nbsp;попадают.
                        </p>
                    </div>

                    <div className={styles.method_card}>
                        <h3 className={styles.h3}>Клипы и нарезки</h3>
                        <p>
                            Зрители часто создают клипы с&nbsp;моментами, где стример произнёс запретку.
                            Такие клипы распространяются в&nbsp;соцсетях и&nbsp;привлекают внимание
                            модерации Twitch. Даже если оригинальный VOD удалён&nbsp;&mdash; клип остаётся.
                        </p>
                    </div>
                </section>

                {/* Блок 7 — Санкции */}
                <section id="sanctions">
                    <h2 className={styles.h2}>Санкции: от&nbsp;предупреждения до&nbsp;permanent ban</h2>
                    <p>
                        Twitch применяет прогрессивную систему наказаний. С&nbsp;2026 года платформа
                        пересмотрела политику: короткие блокировки (1-3 дня) заменены на&nbsp;систему
                        предупреждений (Warnings). Тяжесть санкции зависит от&nbsp;категории нарушения,
                        истории аккаунта и&nbsp;контекста.
                    </p>

                    <div className={styles.sanction_timeline}>
                        <div className={styles.sanction_step} data-level="low">
                            <h3 className={styles.h3}>Warning (предупреждение)</h3>
                            <p className={styles.sanction_duration}>До 2 предупреждений</p>
                            <p>
                                Самая лёгкая санкция от&nbsp;Twitch для&nbsp;стримера. Применяется
                                за&nbsp;нарушения низкой тяжести. По&nbsp;обновлённым правилам Twitch
                                выдаёт до&nbsp;двух предупреждений перед первой блокировкой канала.
                                Предупреждение фиксируется в&nbsp;истории аккаунта.
                            </p>
                        </div>

                        <div className={styles.sanction_step} data-level="medium">
                            <h3 className={styles.h3}>Temporary suspension</h3>
                            <p className={styles.sanction_duration}>7 дней / 30 дней</p>
                            <p>
                                Канал полностью блокируется на&nbsp;указанный срок. Стример теряет доход,
                                подписчиков и&nbsp;позиции в&nbsp;рекомендациях. Применяется после
                                исчерпания предупреждений, а&nbsp;также сразу за&nbsp;банворды
                                из&nbsp;категорий hate speech.
                            </p>
                        </div>

                        <div className={styles.sanction_step} data-level="high">
                            <h3 className={styles.h3}>Permanent ban</h3>
                            <p className={styles.sanction_duration}>Безвозвратная блокировка</p>
                            <p>
                                Канал удаляется навсегда. Применяется за&nbsp;расовые оскорбления, N-word,
                                угрозы насилия, повторные серьёзные нарушения. Создание нового аккаунта
                                после перманентного бана&nbsp;&mdash; отдельное нарушение.
                            </p>
                        </div>

                        <div className={styles.sanction_step} data-level="special">
                            <h3 className={styles.h3}>DMCA / копирайт</h3>
                            <p className={styles.sanction_duration}>Отдельная категория</p>
                            <p>
                                Нарушение авторских прав (музыка, контент) карается по&nbsp;другой шкале:
                                3 страйка = перманентный бан. DMCA-страйки не&nbsp;связаны с&nbsp;запретками,
                                но&nbsp;часто идут в&nbsp;комбинации.
                            </p>
                        </div>
                    </div>

                    <div className={styles.appeal_block}>
                        <h3 className={styles.h3}>Как оспорить бан</h3>
                        <p>
                            Twitch позволяет подать апелляцию через Twitch Appeals Portal
                            (appeals.twitch.tv). Рассмотрение занимает от&nbsp;нескольких дней
                            до&nbsp;нескольких недель. Шансы на&nbsp;успех зависят от&nbsp;тяжести
                            нарушения: предупреждение оспорить реально, permanent ban за&nbsp;hate
                            speech&nbsp;&mdash; практически невозможно. Лучшая стратегия&nbsp;&mdash;
                            не&nbsp;допускать бана.
                        </p>
                    </div>
                </section>

                {/* Блок 8 — Как не попасть в бан */}
                <section id="how-to-protect">
                    <h2 className={styles.h2}>Как не&nbsp;попасть в&nbsp;бан: 5&nbsp;способов защиты</h2>

                    <div className={styles.protection_list}>
                        <div className={styles.protection_item}>
                            <span className={styles.protection_number}>1</span>
                            <div>
                                <h3 className={styles.h3}>Знать правила Twitch</h3>
                                <p>
                                    Звучит банально, но&nbsp;большинство забаненных стримеров не&nbsp;читали
                                    Community Guidelines целиком. Правила обновляются несколько раз в&nbsp;год,
                                    и&nbsp;то, что было допустимо вчера, сегодня может быть запреткой. Особенно
                                    важно следить за&nbsp;обновлениями для&nbsp;русскоязычного сегмента.
                                </p>
                            </div>
                        </div>

                        <div className={styles.protection_item}>
                            <span className={styles.protection_number}>2</span>
                            <div>
                                <h3 className={styles.h3}>Задержка стрима (stream delay)</h3>
                                <p>
                                    Задержка 10-30 секунд даёт время среагировать и&nbsp;остановить стрим,
                                    если вылетела запретка. Минус&nbsp;&mdash; теряется интерактивность
                                    с&nbsp;чатом, что критично для&nbsp;большинства стримеров.
                                </p>
                            </div>
                        </div>

                        <div className={styles.protection_item}>
                            <span className={styles.protection_number}>3</span>
                            <div>
                                <h3 className={styles.h3}>Настроить AutoMod</h3>
                                <p>
                                    AutoMod в&nbsp;панели Twitch фильтрует чат, но&nbsp;<strong>не&nbsp;фильтрует
                                    речь стримера</strong>. Он&nbsp;полезен для&nbsp;защиты от&nbsp;банвордов
                                    в&nbsp;чате, но&nbsp;не&nbsp;решает главную проблему&nbsp;&mdash; случайные
                                    запретки в&nbsp;эфире.
                                </p>
                            </div>
                        </div>

                        <div className={styles.protection_item}>
                            <span className={styles.protection_number}>4</span>
                            <div>
                                <h3 className={styles.h3}>Модератор в чате</h3>
                                <p>
                                    Живой модератор может банить нарушителей в&nbsp;чате и&nbsp;предупреждать
                                    стримера. Но&nbsp;модератор не&nbsp;может контролировать, что говорит сам
                                    стример. Кроме того, для&nbsp;маленьких каналов содержать модератора
                                    нерентабельно.
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.protection_item} ${styles.protection_highlight}`}>
                            <span className={styles.protection_number}>5</span>
                            <div>
                                <h3 className={styles.h3}>Автоматическая фильтрация речи&nbsp;&mdash; SpeechShield</h3>
                                <p>
                                    Единственный способ защитить от&nbsp;запреток <strong>собственную речь</strong>
                                    стримера в&nbsp;реальном времени. SpeechShield работает с&nbsp;OBS, распознаёт
                                    речь через AI и&nbsp;мгновенно заглушает запретки до&nbsp;попадания в&nbsp;эфир.
                                    База из&nbsp;90+ слов и&nbsp;70+ паттернов покрывает все категории запреток.
                                    Зрители слышат тишину вместо опасного слова.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Блок 9 — SpeechShield CTA */}
                <section id="speechshield" className={styles.cta_section}>
                    <h2 className={styles.h2}>SpeechShield&nbsp;&mdash; защита речи от&nbsp;запреток</h2>
                    <p>
                        SpeechShield&nbsp;&mdash; это приложение для&nbsp;Windows, которое автоматически
                        фильтрует запретки на&nbsp;стриме в&nbsp;реальном времени. Приложение использует
                        AI-модель распознавания речи Vosk, оптимизированную для&nbsp;русского языка.
                    </p>

                    <div className={styles.features_grid}>
                        <div className={styles.feature_item}>
                            <strong>AI-распознавание</strong>
                            <p>Понимает контекст и&nbsp;все морфологические формы слов</p>
                        </div>
                        <div className={styles.feature_item}>
                            <strong>Работает с OBS</strong>
                            <p>Интеграция через виртуальный микрофон, незаметно для зрителей</p>
                        </div>
                        <div className={styles.feature_item}>
                            <strong>Twitch, YouTube, Kick</strong>
                            <p>Фильтрация на уровне аудио &mdash; работает с любой платформой</p>
                        </div>
                        <div className={styles.feature_item}>
                            <strong>90+ слов, 70+ паттернов</strong>
                            <p>Все категории запреток: мат, hate speech, угрозы</p>
                        </div>
                        <div className={styles.feature_item}>
                            <strong>Весь звук ПК</strong>
                            <p>Фильтрация Discord, игровых чатов и музыки</p>
                        </div>
                        <div className={styles.feature_item}>
                            <strong>Бесплатный тариф</strong>
                            <p>20 часов фильтрации в месяц &mdash; достаточно, чтобы попробовать</p>
                        </div>
                    </div>

                    <button className={styles.cta_button} onClick={handleDownload}>
                        Скачать SpeechShield бесплатно
                    </button>
                    <p className={styles.cta_sub}>Бесплатный тариф &mdash; 20 часов фильтрации в месяц. Windows 10/11.</p>
                </section>

                {/* Блок 10 — Другие платформы */}
                <section id="other-platforms">
                    <h2 className={styles.h2}>Запретки на&nbsp;других платформах</h2>
                    <p>
                        Запретки&nbsp;&mdash; проблема не&nbsp;только Twitch. Каждая стриминговая
                        платформа имеет свои правила модерации речи:
                    </p>
                    <div className={styles.platforms_grid}>
                        <div className={styles.platform_card}>
                            <strong>Discord</strong>
                            <p>Модерация голосовых каналов и&nbsp;текстового чата. Запретки приводят к&nbsp;бану сервера.</p>
                            <span className={styles.coming_soon}>Статья скоро</span>
                        </div>
                        <div className={styles.platform_card}>
                            <strong>YouTube</strong>
                            <p>Менее строг к&nbsp;речи, но&nbsp;наказывает отключением монетизации за&nbsp;hate speech.</p>
                            <span className={styles.coming_soon}>Статья скоро</span>
                        </div>
                        <div className={styles.platform_card}>
                            <strong>Kick</strong>
                            <p>Позиционируется как свободная платформа, но&nbsp;тоже имеет список запрещённого контента.</p>
                            <span className={styles.coming_soon}>Статья скоро</span>
                        </div>
                    </div>
                </section>

                {/* Блок 11 — FAQ */}
                <section id="faq">
                    <h2 className={styles.h2}>Часто задаваемые вопросы</h2>

                    <details className={styles.faq_item} onClick={onFaqToggle}>
                        <summary className={styles.faq_question}>Что такое запретка простыми словами?</summary>
                        <p className={styles.faq_answer}>
                            Запретка&nbsp;&mdash; это слово или фраза, за&nbsp;которые Twitch или другая стриминговая
                            платформа может выдать бан. Обычно это оскорбления по&nbsp;расе, ориентации,
                            национальности, угрозы насилия и&nbsp;другой hate speech. Обычный мат
                            формально не&nbsp;является запреткой, но&nbsp;может привести к&nbsp;бану
                            в&nbsp;сочетании с&nbsp;другими нарушениями.
                        </p>
                    </details>

                    <details className={styles.faq_item} onClick={onFaqToggle}>
                        <summary className={styles.faq_question}>Банят ли на Twitch за одно матерное слово?</summary>
                        <p className={styles.faq_answer}>
                            За&nbsp;обычный мат (экспрессия эмоций)&nbsp;&mdash; обычно нет. За&nbsp;банворд
                            (расовое, гомофобное оскорбление)&nbsp;&mdash; да, возможен бан с&nbsp;первого
                            раза. Граница размыта: мат, направленный на&nbsp;конкретного человека, Twitch
                            может квалифицировать как harassment.
                        </p>
                    </details>

                    <details className={styles.faq_item} onClick={onFaqToggle}>
                        <summary className={styles.faq_question}>Как узнать, что именно я сказал запретку?</summary>
                        <p className={styles.faq_answer}>
                            Twitch не&nbsp;всегда указывает конкретное слово в&nbsp;уведомлении о&nbsp;бане.
                            Вы&nbsp;получите общую формулировку &laquo;hateful conduct&raquo;. SpeechShield
                            ведёт статистику срабатываний&nbsp;&mdash; вы&nbsp;видите, какие слова были
                            заглушены и&nbsp;когда.
                        </p>
                    </details>

                    <details className={styles.faq_item} onClick={onFaqToggle}>
                        <summary className={styles.faq_question}>Можно ли оспорить бан на Twitch?</summary>
                        <p className={styles.faq_answer}>
                            Да, через Twitch Appeals Portal (appeals.twitch.tv). Рассмотрение
                            занимает от&nbsp;нескольких дней до&nbsp;нескольких недель. Шансы зависят
                            от&nbsp;тяжести: предупреждение оспорить реально, permanent за&nbsp;hate
                            speech&nbsp;&mdash; практически невозможно.
                        </p>
                    </details>

                    <details className={styles.faq_item} onClick={onFaqToggle}>
                        <summary className={styles.faq_question}>Работают ли запретки задним числом (на старых VOD)?</summary>
                        <p className={styles.faq_answer}>
                            Да. Twitch анализирует VOD-записи с&nbsp;помощью AI. Стримеры получали баны
                            через дни и&nbsp;недели после стрима. SpeechShield фильтрует речь до&nbsp;записи&nbsp;&mdash;
                            в&nbsp;VOD запретки не&nbsp;попадают.
                        </p>
                    </details>

                    <details className={styles.faq_item} onClick={onFaqToggle}>
                        <summary className={styles.faq_question}>Отличаются ли запретки на Twitch и YouTube?</summary>
                        <p className={styles.faq_answer}>
                            YouTube менее строг к&nbsp;речи стримеров, но&nbsp;наказывает за&nbsp;hate speech
                            отключением монетизации. Twitch банит аккаунт целиком. Набор запрещённых слов
                            пересекается примерно на&nbsp;80%. SpeechShield работает с&nbsp;обеими
                            платформами через OBS.
                        </p>
                    </details>

                    <details className={styles.faq_item} onClick={onFaqToggle}>
                        <summary className={styles.faq_question}>Как SpeechShield помогает избежать бана?</summary>
                        <p className={styles.faq_answer}>
                            SpeechShield использует AI для&nbsp;распознавания речи в&nbsp;реальном времени
                            и&nbsp;автоматически заглушает запретки до&nbsp;попадания в&nbsp;эфир. База
                            содержит 90+&nbsp;слов и&nbsp;70+&nbsp;regex-паттернов, покрывающих все
                            морфологические формы. Зрители слышат тишину вместо запретки&nbsp;&mdash;
                            бан невозможен.
                        </p>
                    </details>
                </section>

                {/* Блок 12 — Финальный CTA */}
                <section className={styles.final_cta}>
                    <h2 className={styles.h2}>Защитите стрим от&nbsp;запреток прямо сейчас</h2>
                    <p>Бесплатный тариф&nbsp;&mdash; 20&nbsp;часов фильтрации в&nbsp;месяц</p>
                    <button className={styles.cta_button_large} onClick={handleDownload}>
                        Защитить мой стрим от запреток&nbsp;&mdash; Скачать SpeechShield
                    </button>
                </section>
            </article>
            <Footer/>
        </div>
    );
};

export default ZapretkiTvicha;

import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Instrukciya.module.css';

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
    sendGoal('instrukciya_cta_download');
    const link = document.createElement('a');
    link.href = 'https://api.speechshield.ru/downloads/file';
    link.download = '';
    link.click();
};

const Instrukciya = () => {
    useEffect(() => {
        document.title = 'Инструкция SpeechShield: как установить и настроить — просто и по шагам';

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

        setMeta('description', 'Простая пошаговая инструкция SpeechShield: как скачать, включить цензуру микрофона за 3 минуты и подключить OBS. Программа сама настроит задержку видео.');
        setMeta('keywords', 'speechshield инструкция, как настроить цензуру стрима, заглушить мат на стриме, настройка obs виртуальный кабель, как пользоваться speechshield');
        setMeta('og:title', 'Инструкция SpeechShield — просто и по шагам', true);
        setMeta('og:description', 'Как скачать, включить цензуру микрофона и подключить OBS. Даже если вы никогда такого не настраивали.', true);
        setMeta('og:image', 'https://speechshield.ru/og/instrukciya.jpg', true);
        setMeta('og:image:secure_url', 'https://speechshield.ru/og/instrukciya.jpg', true);
        setMeta('og:image:type', 'image/jpeg', true);
        setMeta('og:image:width', '1102', true);
        setMeta('og:image:height', '630', true);
        setMeta('og:image:alt', 'Инструкция по установке и настройке SpeechShield', true);
        setMeta('og:url', 'https://speechshield.ru/instrukciya', true);
        setMeta('og:type', 'article', true);
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:image', 'https://speechshield.ru/og/instrukciya.jpg');

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://speechshield.ru/instrukciya';

        const schemas = [
            {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "Как установить и настроить SpeechShield",
                "description": "Простая инструкция: установка, цензура микрофона и подключение к OBS.",
                "image": "https://speechshield.ru/og/instrukciya.jpg",
                "totalTime": "PT10M",
                "tool": [
                    {"@type": "HowToTool", "name": "SpeechShield"},
                    {"@type": "HowToTool", "name": "OBS Studio"},
                    {"@type": "HowToTool", "name": "Виртуальный аудиокабель (VB-CABLE / Voicemeeter)"}
                ],
                "step": [
                    {"@type": "HowToStep", "name": "Установить и пройти мастер", "text": "Скачайте установщик с сайта и запустите его. При первом запуске мастер проверит кабель, поможет выбрать микрофон и подключить OBS."},
                    {"@type": "HowToStep", "name": "Включить защиту", "text": "Выберите «Что чистим» и отметьте, есть ли камера. Нажмите большую кнопку «Включить защиту»."},
                    {"@type": "HowToStep", "name": "Поставить виртуальный кабель", "text": "Для стрима через OBS установите бесплатный VB-CABLE или Voicemeeter — программа найдёт его сама."},
                    {"@type": "HowToStep", "name": "Подключить OBS", "text": "Включите WebSocket в OBS и нажмите «Подключить OBS». Программа сама создаст источник чистого голоса, заглушит микрофон и выставит задержку видео на сцену."}
                ]
            },
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "На каких системах работает SpeechShield?",
                        "acceptedAnswer": {"@type": "Answer", "text": "На Windows 10 и 11. При запуске программа просит разрешение Windows — это нужно для доступа к звуку."}
                    },
                    {
                        "@type": "Question",
                        "name": "Зачем нужна задержка и надо ли её настраивать вручную?",
                        "acceptedAnswer": {"@type": "Answer", "text": "Программе нужно 1–2 секунды, чтобы распознать слово и заглушить его, поэтому звук идёт с небольшой задержкой. Чтобы картинка совпала со звуком, нажмите «Подключить OBS» — SpeechShield сам добавит задержку видео на сцену, вручную считать ничего не нужно."}
                    },
                    {
                        "@type": "Question",
                        "name": "Нужен ли виртуальный кабель?",
                        "acceptedAnswer": {"@type": "Answer", "text": "Только для стрима через OBS. Чтобы просто проверить цензуру микрофона, кабель не нужен. Подойдёт любой бесплатный — VB-CABLE или Voicemeeter."}
                    },
                    {
                        "@type": "Question",
                        "name": "Чем платные планы лучше бесплатного?",
                        "acceptedAnswer": {"@type": "Answer", "text": "Бесплатно — цензура микрофона до 20 часов в месяц. Платные планы убирают лимит часов, чистят весь звук ПК (игра, Discord) и обрабатывают готовые файлы."}
                    },
                    {
                        "@type": "Question",
                        "name": "Как активировать ключ?",
                        "acceptedAnswer": {"@type": "Answer", "text": "В программе откройте «Лицензия → Активировать лицензию», вставьте ключ из письма и нажмите «Активировать»."}
                    }
                ]
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://speechshield.ru/"},
                    {"@type": "ListItem", "position": 2, "name": "Инструкция", "item": "https://speechshield.ru/instrukciya"}
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

        let sent50 = false, sent100 = false;
        const handleScroll = () => {
            const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrolled >= 0.5 && !sent50) {
                sent50 = true;
                sendGoal('instrukciya_scroll_50');
            }
            if (scrolled >= 0.95 && !sent100) {
                sent100 = true;
                sendGoal('instrukciya_scroll_100');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            scriptEls.forEach(s => s.remove());
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.page}>
            <Header/>
            <article className={styles.article}>

                {/* Хлебные крошки */}
                <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
                    <Link to="/">Главная</Link>
                    <span className={styles.breadcrumb_sep}>/</span>
                    <span>Инструкция</span>
                </nav>

                {/* H1 + lead */}
                <h1 className={styles.h1}>
                    Как настроить SpeechShield&nbsp;&mdash; просто и&nbsp;по&nbsp;шагам
                </h1>
                <p className={styles.lead}>
                    SpeechShield убирает мат и&nbsp;запретки из&nbsp;вашего эфира сам. Вы&nbsp;говорите как обычно&nbsp;&mdash;
                    а&nbsp;зрители слышат речь уже без&nbsp;запрещённых слов. Ниже&nbsp;&mdash; всё по&nbsp;шагам:
                    как скачать, включить и&nbsp;подключить к&nbsp;OBS. Даже если вы&nbsp;никогда такого
                    не&nbsp;настраивали.
                </p>
                <div className={styles.meta}>
                    <time dateTime="2026-06-26">Обновлено 26 июня 2026</time>
                    <span>5 мин чтения</span>
                </div>

                {/* Содержание */}
                <nav className={styles.toc}>
                    <h2 className={styles.toc_title}>Содержание</h2>
                    <ol className={styles.toc_list}>
                        <li><a href="#how-it-works">Что это и как работает</a></li>
                        <li><a href="#need">Что понадобится</a></li>
                        <li><a href="#install">Шаг 1. Установка и мастер настройки</a></li>
                        <li><a href="#quickstart">Шаг 2. Включить защиту</a></li>
                        <li><a href="#obs">Шаг 3. Подключить OBS (автоматически)</a></li>
                        <li><a href="#censor">Тишина или «бип»</a></li>
                        <li><a href="#offline">Готовые файлы</a></li>
                        <li><a href="#plans">Тарифы и ключ</a></li>
                        <li><a href="#faq">Частые вопросы</a></li>
                    </ol>
                </nav>

                {/* Как работает */}
                <section id="how-it-works">
                    <h2 className={styles.h2}>Что это и как работает</h2>
                    <p>Принцип простой:</p>
                    <div className={styles.principle}>
                        <div className={styles.principle_item}>
                            <span className={styles.principle_emoji}>🎤</span>
                            <span>Программа слышит ваш голос</span>
                        </div>
                        <div className={styles.principle_item}>
                            <span className={styles.principle_emoji}>🧠</span>
                            <span>Узнаёт запрещённое слово</span>
                        </div>
                        <div className={styles.principle_item}>
                            <span className={styles.principle_emoji}>🔇</span>
                            <span>Заглушает его — в эфир уходит чистая речь, а вы в наушниках слышите всё как есть</span>
                        </div>
                    </div>
                    <div className={styles.note}>
                        Чтобы успеть заглушить слово, программе нужно <strong>1&ndash;2&nbsp;секунды</strong>.
                        Поэтому звук на&nbsp;стриме идёт с&nbsp;небольшой задержкой&nbsp;&mdash; это нормально.
                        А&nbsp;картинку под&nbsp;неё программа подгонит сама (об&nbsp;этом в&nbsp;шаге&nbsp;3).
                    </div>
                </section>

                {/* Что понадобится */}
                <section id="need">
                    <h2 className={styles.h2}>Что понадобится</h2>
                    <ul className={styles.list}>
                        <li>Компьютер с&nbsp;<strong>Windows</strong> (10 или&nbsp;11).</li>
                        <li><strong>Интернет</strong> &mdash; программа проверяет лицензию при&nbsp;запуске.</li>
                        <li>Для&nbsp;стрима через OBS&nbsp;&mdash; бесплатная программа <strong>«виртуальный кабель»</strong> (поставим по&nbsp;шагам, ничего сложного).</li>
                    </ul>
                </section>

                {/* Установка */}
                <section id="install">
                    <h2 className={styles.h2}>Шаг 1. Установка и мастер настройки</h2>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.step_number}>1</div>
                            <div className={styles.step_body}>
                                <strong>Скачайте программу</strong>
                                <p>Нажмите кнопку «Скачать SpeechShield» внизу этой страницы.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>2</div>
                            <div className={styles.step_body}>
                                <strong>Откройте файл и установите</strong>
                                <p>Нажимайте «Далее». Если Windows спросит, разрешить ли запуск — нажмите «Да». Программе это нужно, чтобы работать со звуком.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>3</div>
                            <div className={styles.step_body}>
                                <strong>Пройдите мастер настройки</strong>
                                <p>При первом запуске откроется пошаговый мастер: он проверит виртуальный кабель, поможет выбрать микрофон (с проверкой звука) и при желании подключит OBS. Просто следуйте подсказкам и нажимайте «Далее».</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.note}>
                        <strong>Антивирус ругается?</strong> Так бывает с&nbsp;новыми программами. SpeechShield
                        безопасен&nbsp;&mdash; нажмите «Разрешить» или&nbsp;добавьте его в&nbsp;исключения.
                    </div>
                </section>

                {/* Быстрый старт */}
                <section id="quickstart">
                    <h2 className={styles.h2}>Шаг 2. Включить защиту</h2>
                    <p>
                        После мастера всё на&nbsp;одном экране: большая кнопка и&nbsp;пара простых настроек.
                        Микрофон уже выбран в&nbsp;мастере, так что включить можно сразу.
                    </p>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.step_number}>1</div>
                            <div className={styles.step_body}>
                                <strong>Выберите «Что чистим»</strong>
                                <p>«Только мой голос» — фильтруется микрофон. «Голос + звук игры и Discord» — ещё и звук компьютера (планы Стандарт и Pro).</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>2</div>
                            <div className={styles.step_body}>
                                <strong>Отметьте камеру, если показываете лицо</strong>
                                <p>Галочка «Я на камере» — программа сама притормозит видео в OBS, чтобы губы совпали со звуком.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>3</div>
                            <div className={styles.step_body}>
                                <strong>Нажмите «Включить защиту»</strong>
                                <p>Полоска под микрофоном задвигается — значит программа вас слышит, и запретки заглушаются. Та же кнопка выключает защиту.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.note}>
                        Если выбрали <strong>«Голос + звук игры»</strong>, появится строка
                        <strong> «Звук игры брать из»</strong> — укажите там захват системного звука
                        (Stereo&nbsp;Mix) или&nbsp;виртуальный кабель, в&nbsp;который выведена игра.
                        Рядом есть кнопка «?» с&nbsp;подсказкой, как это включить.
                    </div>
                </section>

                {/* OBS */}
                <section id="obs">
                    <h2 className={styles.h2}>Шаг 3. Подключить OBS (автоматически)</h2>

                    <h3 className={styles.h3}>Сначала — виртуальный кабель</h3>
                    <p>
                        Чтобы чистый звук попал на&nbsp;стрим, нужен <strong>«виртуальный кабель»</strong>.
                        Представьте невидимую трубку: программа наливает в&nbsp;неё чистый голос, а&nbsp;OBS
                        берёт звук из&nbsp;этой трубки. Скачайте бесплатный <strong>VB-CABLE</strong>
                        (или&nbsp;Voicemeeter), установите и&nbsp;перезагрузите компьютер&nbsp;&mdash; тогда
                        кабель появится в&nbsp;списке устройств. Программа найдёт его сама.
                    </p>

                    <h3 className={styles.h3}>Подключите OBS — и программа всё сделает сама</h3>
                    <p>
                        Больше не&nbsp;нужно вручную создавать источники и&nbsp;считать задержку.
                        Достаточно один раз подключить OBS:
                    </p>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.step_number}>1</div>
                            <div className={styles.step_body}>
                                <strong>Включите связь в OBS</strong>
                                <p>В OBS откройте «Инструменты → Настройки WebSocket-сервера» и поставьте галочку «Включить WebSocket-сервер».</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>2</div>
                            <div className={styles.step_body}>
                                <strong>Нажмите «Подключить OBS»</strong>
                                <p>Кнопка есть прямо на главном экране (если в OBS задан пароль — впишите его). Подключение запоминается: в следующий раз OBS подхватится сам.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>3</div>
                            <div className={styles.step_body}>
                                <strong>Нажмите «Включить защиту»</strong>
                                <p>Программа сама создаст в OBS источник с чистым голосом, заглушит обычный микрофон и выставит задержку видео на сцену — звук и картинка совпадут. Вам в OBS делать ничего не нужно.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.note}>
                        <strong>Зачем задержка.</strong> Звук идёт с&nbsp;задержкой 1&ndash;2&nbsp;секунды
                        (программе нужно успеть заглушить слово), поэтому картинку нужно чуть притормозить.
                        Программа делает это за&nbsp;вас&nbsp;&mdash; считать ничего не&nbsp;надо.
                    </div>

                    <h3 className={styles.h3}>Если хотите настроить вручную</h3>
                    <p>
                        Нажмите на&nbsp;главном экране <strong>«Настроить вручную»</strong> и&nbsp;задайте всё сами:
                    </p>
                    <ul className={styles.list}>
                        <li>в&nbsp;OBS добавьте источник «Источник захвата звука» и&nbsp;выберите виртуальный кабель;</li>
                        <li>выключите в&nbsp;OBS обычный микрофон (иначе в&nbsp;эфир уйдёт версия без&nbsp;цензуры);</li>
                        <li>повесьте на&nbsp;сцену задержку видео ~500&nbsp;мс&nbsp;&mdash; правый клик по&nbsp;сцене → «Фильтры» → «Задержка рендеринга» (один фильтр держит максимум 500&nbsp;мс, для&nbsp;большей задержки добавьте несколько).</li>
                    </ul>
                </section>

                {/* Цензура */}
                <section id="censor">
                    <h2 className={styles.h2}>Тишина или «бип»</h2>
                    <p>
                        По&nbsp;умолчанию запретка просто заглушается&nbsp;&mdash; на&nbsp;её&nbsp;месте тишина.
                        Если хотите классический «пиип» вместо слова, переключите режим в&nbsp;настройках.
                        Список запрещённых слов программа обновляет сама&nbsp;&mdash; вести его вручную не&nbsp;нужно.
                    </p>
                </section>

                {/* Офлайн */}
                <section id="offline">
                    <h2 className={styles.h2}>Готовые файлы (Standard / Pro)</h2>
                    <p>
                        Можно почистить уже записанное видео или&nbsp;аудио&nbsp;&mdash; удобно для&nbsp;нарезок
                        и&nbsp;записей стримов. Откройте вкладку обработки файлов, выберите файл и&nbsp;нажмите
                        «Обработать»&nbsp;&mdash; программа сделает копию без&nbsp;запреток. Для&nbsp;видеофайлов
                        нужен установленный FFmpeg.
                    </p>
                </section>

                {/* Тарифы */}
                <section id="plans">
                    <h2 className={styles.h2}>Тарифы и ключ</h2>
                    <div className={styles.plans_grid}>
                        <div className={styles.plan_card}>
                            <div className={styles.plan_name}>Free</div>
                            <div className={styles.plan_price}>0&nbsp;₽</div>
                            <ul className={styles.plan_features}>
                                <li>Цензура микрофона</li>
                                <li>Работа с OBS</li>
                                <li>20 часов в месяц</li>
                                <li data-off="true">Весь звук ПК</li>
                                <li data-off="true">Обработка файлов</li>
                            </ul>
                        </div>
                        <div className={`${styles.plan_card} ${styles.plan_card_highlight}`}>
                            <div className={styles.plan_name}>Standard</div>
                            <div className={styles.plan_price}>299&nbsp;₽<span>/мес</span></div>
                            <ul className={styles.plan_features}>
                                <li>Всё из Free</li>
                                <li>Без лимита часов</li>
                                <li>Весь звук ПК (игра, Discord)</li>
                                <li>Обработка файлов — 3/мес</li>
                            </ul>
                        </div>
                        <div className={styles.plan_card}>
                            <div className={styles.plan_name}>Pro</div>
                            <div className={styles.plan_price}>499&nbsp;₽<span>/мес</span></div>
                            <ul className={styles.plan_features}>
                                <li>Всё из Standard</li>
                                <li>Файлы — без лимита</li>
                                <li>Приоритетная поддержка</li>
                            </ul>
                        </div>
                    </div>
                    <p style={{marginTop: 24}}>
                        Оформить подписку&nbsp;&mdash; на&nbsp;<Link className={styles.inline_link} to="/#payments">странице тарифов</Link>.
                        После оплаты ключ придёт на&nbsp;email.
                    </p>
                    <h3 className={styles.h3}>Как ввести ключ</h3>
                    <ol className={styles.list}>
                        <li>В программе откройте «Лицензия → Активировать лицензию».</li>
                        <li>Вставьте ключ из письма.</li>
                        <li>Нажмите «Активировать» — откроются платные функции.</li>
                    </ol>
                </section>

                {/* FAQ */}
                <section id="faq">
                    <h2 className={styles.h2}>Частые вопросы</h2>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>Зачем эта задержка и надо ли её настраивать?</summary>
                        <p className={styles.faq_answer}>
                            Программе нужно 1–2 секунды, чтобы услышать слово и заглушить его — поэтому звук чуть
                            отстаёт. Чтобы картинка совпала со звуком, нажмите «Подключить OBS» — задержку
                            программа выставит сама на сцену.
                        </p>
                    </details>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>Слово всё равно проскочило в эфир</summary>
                        <p className={styles.faq_answer}>
                            Обычно это значит, что в OBS не выставлена задержка видео или звук идёт мимо
                            виртуального кабеля. Нажмите «Подключить OBS» (программа сама добавит задержку и
                            заглушит обычный микрофон) и проверьте, что выбран нужный режим.
                        </p>
                    </details>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>В OBS нет звука</summary>
                        <p className={styles.faq_answer}>
                            Проверьте, что OBS подключён («Подключить OBS») и нажата кнопка «Включить защиту».
                            При ручной настройке — что источник «Захват звука» в OBS указывает на виртуальный кабель.
                        </p>
                    </details>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>Программа просит разрешение Windows</summary>
                        <p className={styles.faq_answer}>
                            Это нормально — доступ нужен для работы со звуком. Нажмите «Да» при запуске.
                        </p>
                    </details>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>Можно добавить свои слова?</summary>
                        <p className={styles.faq_answer}>
                            Список запреток ведётся и обновляется автоматически. Если чего-то не хватает —
                            напишите в поддержку через форму на сайте.
                        </p>
                    </details>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>Работает на macOS или Linux?</summary>
                        <p className={styles.faq_answer}>
                            Пока только Windows.
                        </p>
                    </details>
                </section>

                {/* CTA */}
                <section className={styles.cta_section}>
                    <h2 className={styles.h2}>Готовы попробовать?</h2>
                    <p>Скачайте и запустите цензуру микрофона уже через пару минут — бесплатно.</p>
                    <button className={styles.cta_button_large} onClick={handleDownload}>
                        Скачать SpeechShield
                    </button>
                    <p className={styles.cta_sub}>Бесплатный план • Windows 10/11</p>
                </section>

            </article>
            <Footer/>
        </div>
    );
};

export default Instrukciya;

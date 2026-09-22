import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Instrukciya.module.css';
import {sendGoal} from '../../utils/metrika.ts';

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
                    <time dateTime="2026-09-22">Обновлено 22 сентября 2026</time>
                    <span>7 мин чтения</span>
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
                        <li><a href="#check">Шаг 4. Проверить, что всё работает</a></li>
                        <li><a href="#chat">Цензура чата и звука игры (Discord, браузер)</a></li>
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
                        Чтобы успеть заглушить слово, программе нужно <strong>3&ndash;4&nbsp;секунды</strong> (задержку можно выбрать в настройке «Задержка эфира»).
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
                                <p>В OBS откройте «Сервис → Настройки сервера WebSocket» и поставьте галочку «Включить сервер WebSocket» → «Применить».</p>
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
                        <strong>Зачем задержка.</strong> Звук идёт с&nbsp;задержкой 3&ndash;4&nbsp;секунды
                        (программе нужно успеть заглушить слово), поэтому картинку нужно чуть притормозить.
                        Программа делает это за&nbsp;вас&nbsp;&mdash; считать ничего не&nbsp;надо.
                    </div>

                    <h3 className={styles.h3}>Если хотите настроить вручную</h3>
                    <p>
                        Нажмите на&nbsp;главном экране <strong>«Настроить вручную»</strong> и&nbsp;задайте всё сами:
                    </p>
                    <ul className={styles.list}>
                        <li>в&nbsp;OBS добавьте источник «Захват входного аудиопотока» и&nbsp;выберите виртуальный кабель;</li>
                        <li>выключите в&nbsp;OBS обычный микрофон&nbsp;&mdash; и&nbsp;вообще <strong>все</strong> микрофоны, которые слышат ваш голос (иначе в&nbsp;эфир уйдёт версия без&nbsp;цензуры);</li>
                        <li>повесьте на&nbsp;сцену задержку видео, равную вашей «Задержке эфира»&nbsp;&mdash; при&nbsp;настройке «Баланс (3&nbsp;сек)» это ~3200&nbsp;мс: правый клик по&nbsp;сцене → «Фильтры» → «Задержка рендеринга». Один фильтр держит максимум 500&nbsp;мс, поэтому добавьте 6&ndash;7&nbsp;штук. Гораздо проще нажать «Подключить OBS»&nbsp;&mdash; и&nbsp;программа сделает всё это сама.</li>
                    </ul>
                </section>

                {/* Проверка */}
                <section id="check">
                    <h2 className={styles.h2}>Шаг 4. Проверить, что всё работает</h2>
                    <p>Минута проверки до&nbsp;эфира избавит от&nbsp;сюрпризов в&nbsp;эфире:</p>
                    <ul className={styles.list}>
                        <li><strong>Скажите тестовую запретку в&nbsp;микрофон.</strong> В&nbsp;предпросмотре OBS
                            (или&nbsp;в&nbsp;записи пары секунд) слово должно прозвучать заглушенным&nbsp;&mdash;
                            и&nbsp;<strong>только один раз</strong>. Если слышно дважды или без&nbsp;цензуры&nbsp;&mdash;
                            где-то остался включённый обычный микрофон.</li>
                        <li><strong>Загляните в&nbsp;микшер OBS.</strong> Правильная картина: источник
                            SpeechShield&nbsp;&mdash; включён, полоска бегает, когда вы&nbsp;говорите; ваш обычный
                            микрофон (и&nbsp;любые другие микрофоны)&nbsp;&mdash; перечёркнутый динамик;
                            «Рабочий стол»&nbsp;&mdash; включён, если чат и&nbsp;игру вы&nbsp;не&nbsp;цензурите
                            (а&nbsp;если цензурите&nbsp;&mdash; см.&nbsp;следующий раздел).</li>
                        <li><strong>Счётчик «Заглушено за&nbsp;сессию»</strong> в&nbsp;программе растёт после
                            каждой пойманной запретки&nbsp;&mdash; по&nbsp;нему видно, что защита живая.</li>
                    </ul>
                    <div className={styles.note}>
                        Надпись <strong>«Неактивен»</strong> над&nbsp;источником в&nbsp;микшере OBS означает,
                        что источник не&nbsp;добавлен в&nbsp;текущую сцену (или&nbsp;выключен «глазиком»).
                        Выберите свою сцену и&nbsp;добавьте источник в&nbsp;неё&nbsp;&mdash; или&nbsp;нажмите
                        «Подключить OBS», и&nbsp;программа сделает это сама.
                    </div>
                </section>

                {/* Цензура чата и звука игры */}
                <section id="chat">
                    <h2 className={styles.h2}>Цензура чата и звука игры (Discord, браузер)</h2>
                    <p>
                        SpeechShield умеет заглушать запретки не&nbsp;только в&nbsp;вашем голосе, но&nbsp;и&nbsp;в&nbsp;звуке,
                        который издаёт компьютер: голосовой чат Discord, собеседники в&nbsp;браузере, игра.
                        Вы&nbsp;в&nbsp;наушниках слышите всё как есть и&nbsp;без&nbsp;задержки, а&nbsp;в&nbsp;эфир этот звук
                        уходит уже почищенным. Режим доступен на&nbsp;планах Стандарт и&nbsp;Pro.
                    </p>
                    <h3 className={styles.h3}>Что понадобится</h3>
                    <ul className={styles.list}>
                        <li><strong>Источник системного звука</strong>&nbsp;&mdash; «Stereo Mix» (Стерео микшер) вашей
                            звуковой карты <em>или</em> отдельный виртуальный кабель, в&nbsp;который выведен чат.</li>
                        <li><strong>Второй виртуальный кабель</strong> для&nbsp;выхода чистого звука в&nbsp;OBS&nbsp;&mdash;
                            первый занят вашим голосом. Бесплатный вариант: Hi-Fi Cable с&nbsp;того&nbsp;же сайта
                            vb-audio.com (после установки&nbsp;&mdash; перезагрузка).</li>
                    </ul>
                    <h3 className={styles.h3}>Настройка по шагам</h3>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.step_number}>1</div>
                            <div className={styles.step_body}>
                                <strong>Направьте звук чата туда, где программа его услышит</strong>
                                <p>Если берёте звук из «Stereo Mix (Realtek)», учтите: он слышит только то, что играет
                                через устройство Realtek. С USB-наушниками (HyperX, Logitech и т.п.) сделайте так:
                                Параметры Windows → Система → Звук → «Громкость приложений и настройки устройств» →
                                для Discord или браузера выберите «Вывод: Динамики (Realtek)». Громкость динамиков — 100%,
                                звук из колонок при этом не мешает: если колонки подключены и слышно двойное — выключите их кнопкой,
                                но не убавляйте громкость в Windows.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>2</div>
                            <div className={styles.step_body}>
                                <strong>Включите режим в программе</strong>
                                <p>«Что чистим» → «Голос + звук игры и Discord». В строке «Звук игры брать из» выберите
                                Stereo Mix (или кабель, куда выведен чат). Затем «Настроить вручную»: «Выход в OBS» —
                                второй кабель, «Наушники» — ваши наушники. Важно: выход в OBS и наушники — разные
                                устройства, иначе цензура чата работать не будет (программа предупредит).</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>3</div>
                            <div className={styles.step_body}>
                                <strong>Поправьте OBS</strong>
                                <p>Добавьте источник «Захват входного аудиопотока» со вторым кабелем — это чистый звук
                                чата. А «Рабочий стол» в микшере выключите: иначе чат пойдёт в эфир напрямую, мимо
                                цензуры, и всё будет слышно дважды.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.step_number}>4</div>
                            <div className={styles.step_body}>
                                <strong>Проверьте</strong>
                                <p>Попросите собеседника произнести тестовую запретку (или включите видео с матом в
                                браузере). Вы услышите слово как есть, а в предпросмотре эфира оно будет заглушено.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.note}>
                        <strong>Итог по&nbsp;микшеру OBS в&nbsp;этом режиме:</strong> SpeechShield (голос)&nbsp;&mdash; включён,
                        источник со&nbsp;вторым кабелем (чат)&nbsp;&mdash; включён, обычный микрофон&nbsp;&mdash; выключен,
                        «Рабочий стол»&nbsp;&mdash; выключен.
                    </div>
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
                            Программе нужно 3–4 секунды, чтобы гарантированно услышать слово и заглушить его — поэтому звук
                            отстаёт от реального времени. Чтобы картинка совпала со звуком, нажмите «Подключить OBS» — задержку
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
                        <summary className={styles.faq_question}>Пишет «Лицензия привязана к другому устройству»</summary>
                        <p className={styles.faq_answer}>
                            Просто перезапустите программу — лицензия перенесётся на это устройство автоматически
                            (перенос доступен раз в 30 дней). Если не помогло — напишите в поддержку, решим за минуту.
                        </p>
                    </details>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>«Не удалось загрузить список слов»</summary>
                        <p className={styles.faq_answer}>
                            Сначала проверьте интернет и нажмите «Включить защиту» ещё раз. Если программа при этом
                            пишет про лицензию — следуйте её подсказке (чаще всего достаточно перезапуска). Если список
                            загружался раньше, программа продолжит работать на сохранённой копии — эфир не сорвётся.
                        </p>
                    </details>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>Сменил монитор или разрешение — программа просит лицензию</summary>
                        <p className={styles.faq_answer}>
                            Такое было в версиях до 1.0.5. Обновитесь до свежей версии (программа предложит сама при
                            запуске) — теперь привязка не зависит от мониторов, разрешения и языка системы.
                        </p>
                    </details>

                    <details className={styles.faq_item}>
                        <summary className={styles.faq_question}>Настроил цензуру чата — и собеседников не стало слышно в эфире</summary>
                        <p className={styles.faq_answer}>
                            Скорее всего, «Рабочий стол» в OBS выключен, а источник со вторым кабелем не добавлен —
                            звук чата некуда идти. Добавьте в сцену «Захват входного аудиопотока» с тем кабелем,
                            который выбран в программе как «Выход в OBS». Ну а если чат вы не цензурите — просто
                            включите «Рабочий стол» обратно.
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

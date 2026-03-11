import styles from './Privacy.module.css';

import Header from "../../components/header/Header.tsx";

const sections = [
    {id: 'general', num: '01', title: 'Общие положения'},
    {id: 'terms', num: '02', title: 'Основные понятия'},
    {id: 'categories', num: '03', title: 'Категории обрабатываемых данных'},
    {id: 'purposes', num: '04', title: 'Цели обработки'},
    {id: 'legal', num: '05', title: 'Правовые основания обработки'},
    {id: 'methods', num: '06', title: 'Способы и сроки обработки'},
    {id: 'transfer', num: '07', title: 'Передача данных третьим лицам'},
    {id: 'cookies', num: '08', title: 'Файлы cookie'},
    {id: 'rights', num: '09', title: 'Права субъекта персональных данных'},
    {id: 'security', num: '10', title: 'Меры по защите данных'},
    {id: 'changes', num: '11', title: 'Изменение Политики'},
    {id: 'contacts', num: '12', title: 'Контактная информация'},
];
// const data = [
//     {
//         title:
//     }
// ]

const Privacy = () => {
    return (
        <div className={styles.page}>
            <Header/>

            <main className={styles.content}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Политика конфиденциальности</h1>
                    <p className={styles.subtitle}>
                        ООО «СПИЧШИЛДДЕВЕЛОПМЕНТ» — дата публикации: 10 марта 2026 г.
                    </p>
                </div>

                <nav className={styles.toc}>
                    <h2 className={styles.tocTitle}>Оглавление</h2>
                    <ol className={styles.tocList}>
                        {sections.map((s) => (
                            <li key={s.id} className={styles.tocItem}>
                                <a href={`#${s.id}`} className={styles.tocLink}>
                                    <span className={styles.tocNumber}>{s.num}</span>
                                    {s.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* 01. Общие положения */}
                <section id="general" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>01</span>
                        <h2 className={styles.sectionTitle}>Общие положения</h2>
                    </div>
                    <p className={styles.sectionText}>
                        1.1. Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок
                        обработки и защиты персональных данных пользователей (далее — «Субъект»)
                        программного комплекса SpeechShield и сайта speechshield.ru.
                    </p>
                    <p className={styles.sectionText}>
                        1.2. Оператором персональных данных является ООО «СПИЧШИЛДДЕВЕЛОПМЕНТ»
                        (ИНН 6319267810, ОГРН 1256300023913), адрес: 423465, Республика Татарстан,
                        г. Альметьевск, ул. Белоглазова, д. 48, кв. 57 (далее — «Оператор»).
                    </p>
                    <p className={styles.sectionText}>
                        1.3. Настоящая Политика разработана в соответствии с:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Конституцией Российской Федерации (ст. 23, 24);
                        </li>
                        <li className={styles.numberedItem}>
                            Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»;
                        </li>
                        <li className={styles.numberedItem}>
                            Федеральным законом от 27.07.2006 № 149-ФЗ «Об информации, информационных
                            технологиях и о защите информации»;
                        </li>
                        <li className={styles.numberedItem}>
                            Постановлением Правительства РФ от 01.11.2012 № 1119 «Об утверждении
                            требований к защите персональных данных при их обработке в информационных
                            системах персональных данных»;
                        </li>
                        <li className={styles.numberedItem}>
                            Приказом ФСТЭК России от 18.02.2013 № 21 «Об утверждении состава и
                            содержания организационных и технических мер по обеспечению безопасности
                            персональных данных».
                        </li>
                    </ol>
                    <div className={styles.highlight}>
                        <p>
                            1.4. Согласие Субъекта на обработку персональных данных является отдельным,
                            конкретным и информированным (ст. 9 ФЗ-152). Субъект даёт такое согласие
                            путём проставления отметки «Я согласен с Политикой конфиденциальности» при
                            регистрации на Платформе. Данное согласие является самостоятельным и не
                            объединяется с акцептом публичной оферты.
                        </p>
                    </div>
                    <p className={styles.sectionText}>
                        1.5. Оператор зарегистрирован в реестре операторов персональных данных
                        Роскомнадзора в соответствии с требованиями ст. 22 ФЗ-152. Уведомление
                        об обработке персональных данных подано до начала обработки.
                    </p>
                </section>

                {/* 02. Основные понятия */}
                <section id="terms" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>02</span>
                        <h2 className={styles.sectionTitle}>Основные понятия</h2>
                    </div>
                    <table className={styles.defTable}>
                        <thead>
                        <tr>
                            <th>Понятие</th>
                            <th>Определение</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr >
                            <td className={styles.defTerm}>Персональные данные</td>
                            <td className={styles.rightTerm}>
                                Любая информация, относящаяся к прямо или косвенно определённому
                                или определяемому физическому лицу (субъекту персональных данных)
                                (ст. 3 ФЗ-152).
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.defTerm}>Обработка</td>
                            <td className={styles.rightTerm}>
                                Любое действие с персональными данными: сбор, запись, систематизация,
                                накопление, хранение, уточнение, извлечение, использование, передача,
                                обезличивание, блокирование, удаление, уничтожение.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.defTerm}>Оператор</td>
                            <td className={styles.rightTerm}>
                                ООО «СПИЧШИЛДДЕВЕЛОПМЕНТ», самостоятельно организующее и осуществляющее
                                обработку персональных данных.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.defTerm}>Субъект</td>
                            <td className={styles.rightTerm}>
                                Физическое лицо, персональные данные которого обрабатываются Оператором.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.defTerm}>Автоматизированная обработка</td>
                            <td className={styles.rightTerm}>
                                Обработка персональных данных с помощью средств вычислительной техники.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.defTerm}>Обезличивание</td>
                            <td className={styles.rightTerm}>
                                Действия, в результате которых становится невозможным без использования
                                дополнительной информации определить принадлежность данных конкретному
                                Субъекту.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </section>

                {/* 03. Категории обрабатываемых данных */}
                <section id="categories" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>03</span>
                        <h2 className={styles.sectionTitle}>Категории обрабатываемых данных</h2>
                    </div>
                    <p className={styles.sectionText}>
                        3.1. Оператор обрабатывает следующие категории персональных данных:
                    </p>
                    <p className={styles.sectionText}>
                        <strong>Данные, предоставляемые Субъектом при регистрации:</strong>
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>Адрес электронной почты;</li>
                        <li className={styles.numberedItem}>Имя (псевдоним);</li>
                        <li className={styles.numberedItem}>Пароль (в хешированном виде).</li>
                    </ol>
                    <p className={styles.sectionText}>
                        <strong>Данные, получаемые автоматически:</strong>
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>IP-адрес;</li>
                        <li className={styles.numberedItem}>Идентификатор устройства (для привязки лицензии);</li>
                        <li className={styles.numberedItem}>Тип и версия операционной системы;</li>
                        <li className={styles.numberedItem}>Версия приложения SpeechShield;</li>
                        <li className={styles.numberedItem}>Данные файлов cookie и аналогичных технологий;</li>
                        <li className={styles.numberedItem}>Статистика использования (время работы, объём обработанных
                            данных).
                        </li>
                    </ol>
                    <p className={styles.sectionText}>
                        <strong>Платёжные данные:</strong>
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Данные банковской карты обрабатываются непосредственно платёжным сервисом
                            (ЮKassa) и не хранятся на серверах Оператора. Оператор получает только
                            идентификатор транзакции и статус оплаты.
                        </li>
                    </ol>
                    <div className={styles.highlight}>
                        <p>
                            3.2. Оператор НЕ обрабатывает биометрические персональные данные.
                            Распознавание речи осуществляется локально на устройстве пользователя
                            и используется исключительно для выявления ненормативной лексики,
                            а не для идентификации личности по голосу.
                        </p>
                    </div>
                    <p className={styles.sectionText}>
                        3.3. Оператор не осуществляет обработку специальных категорий персональных данных
                        (расовая принадлежность, политические взгляды, состояние здоровья и т.д.).
                    </p>
                </section>

                {/* 04. Цели обработки */}
                <section id="purposes" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>04</span>
                        <h2 className={styles.sectionTitle}>Цели обработки</h2>
                    </div>
                    <p className={styles.sectionText}>
                        4.1. Оператор обрабатывает персональные данные в следующих целях:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Регистрация и идентификация Субъекта на Платформе;
                        </li>
                        <li className={styles.numberedItem}>
                            Предоставление доступа к функциям Платформы и исполнение условий
                            публичной оферты;
                        </li>
                        <li className={styles.numberedItem}>
                            Управление лицензиями и подписками (активация, продление, деактивация);
                        </li>
                        <li className={styles.numberedItem}>
                            Проведение расчётов за оказанные услуги;
                        </li>
                        <li className={styles.numberedItem}>
                            Оказание технической поддержки и обратная связь;
                        </li>
                        <li className={styles.numberedItem}>
                            Улучшение качества Платформы на основе обезличенной статистики использования;
                        </li>
                        <li className={styles.numberedItem}>
                            Обеспечение безопасности Платформы, предотвращение мошенничества
                            и несанкционированного доступа;
                        </li>
                        <li className={styles.numberedItem}>
                            Исполнение обязательств, предусмотренных законодательством РФ.
                        </li>
                    </ol>
                    <p className={styles.sectionText}>
                        4.2. Оператор не использует персональные данные для автоматизированного принятия
                        решений, порождающих юридические последствия для Субъекта.
                    </p>
                </section>

                {/* 05. Правовые основания обработки */}
                <section id="legal" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>05</span>
                        <h2 className={styles.sectionTitle}>Правовые основания обработки</h2>
                    </div>
                    <p className={styles.sectionText}>
                        5.1. Обработка персональных данных осуществляется на следующих правовых основаниях
                        (ст. 6 ФЗ-152):
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Согласие Субъекта на обработку персональных данных, выраженное путём
                            проставления отметки «Я согласен с Политикой конфиденциальности» при
                            регистрации на Платформе (отдельно от акцепта публичной оферты);
                        </li>
                        <li className={styles.numberedItem}>
                            Исполнение договора (публичной оферты), стороной которого является Субъект;
                        </li>
                        <li className={styles.numberedItem}>
                            Исполнение обязанностей, возложенных на Оператора законодательством РФ
                            (бухгалтерский и налоговый учёт);
                        </li>
                        <li className={styles.numberedItem}>
                            Законный интерес Оператора в обеспечении безопасности Платформы
                            и предотвращении мошенничества, при условии, что такой интерес не нарушает
                            права и свободы Субъекта.
                        </li>
                    </ol>
                </section>

                {/* 06. Способы и сроки обработки */}
                <section id="methods" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>06</span>
                        <h2 className={styles.sectionTitle}>Способы и сроки обработки</h2>
                    </div>
                    <p className={styles.sectionText}>
                        6.1. Обработка персональных данных осуществляется автоматизированным способом
                        с использованием средств вычислительной техники, а также без использования средств
                        автоматизации (в случае обращений в техническую поддержку).
                    </p>
                    <p className={styles.sectionText}>
                        6.2. Персональные данные хранятся на серверах, расположенных на территории
                        Российской Федерации, в соответствии с ч. 5 ст. 18 ФЗ-152.
                    </p>
                    <p className={styles.sectionText}>
                        6.3. Сроки хранения персональных данных:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Данные учётной записи — в течение всего срока использования Платформы
                            и 1 (один) год после удаления учётной записи;
                        </li>
                        <li className={styles.numberedItem}>
                            Платёжные данные (идентификаторы транзакций) — 5 (пять) лет в соответствии
                            с требованиями бухгалтерского и налогового законодательства;
                        </li>
                        <li className={styles.numberedItem}>
                            Технические данные (логи) — 12 (двенадцать) месяцев;
                        </li>
                        <li className={styles.numberedItem}>
                            Файлы, загруженные для оффлайн-обработки — 90 (девяносто) календарных дней
                            с момента загрузки, после чего автоматически удаляются;
                        </li>
                        <li className={styles.numberedItem}>
                            Обращения в техническую поддержку — 2 (два) года.
                        </li>
                    </ol>
                    <p className={styles.sectionText}>
                        6.4. По истечении сроков хранения персональные данные уничтожаются в течение
                        30 (тридцати) календарных дней.
                    </p>
                </section>

                {/* 07. Передача данных третьим лицам */}
                <section id="transfer" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>07</span>
                        <h2 className={styles.sectionTitle}>Передача данных третьим лицам</h2>
                    </div>
                    <p className={styles.sectionText}>
                        7.1. Оператор может передавать персональные данные третьим лицам в следующих случаях:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Платёжным системам (ЮKassa и др.) — в объёме, необходимом для проведения
                            расчётов. Данные банковских карт обрабатываются непосредственно платёжным
                            сервисом и не передаются Оператору;
                        </li>
                        <li className={styles.numberedItem}>
                            Хостинг-провайдерам — для размещения серверной инфраструктуры. Провайдеры
                            не имеют доступа к содержимому данных и действуют на основании договоров
                            об обработке данных;
                        </li>
                        <li className={styles.numberedItem}>
                            Государственным органам — по их законному требованию в случаях,
                            предусмотренных законодательством РФ.
                        </li>
                    </ol>
                    <p className={styles.sectionText}>
                        7.2. Оператор не осуществляет трансграничную передачу персональных данных.
                    </p>
                    <p className={styles.sectionText}>
                        7.3. Оператор не продаёт и не передаёт персональные данные третьим лицам
                        в маркетинговых целях.
                    </p>
                </section>

                {/* 08. Файлы cookie */}
                <section id="cookies" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>08</span>
                        <h2 className={styles.sectionTitle}>Файлы cookie</h2>
                    </div>
                    <p className={styles.sectionText}>
                        8.1. Сайт speechshield.ru использует файлы cookie — небольшие текстовые файлы,
                        сохраняемые в браузере пользователя.
                    </p>
                    <p className={styles.sectionText}>
                        8.2. Типы используемых cookie:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            <strong>Необходимые</strong> — обеспечивают работоспособность сайта
                            (авторизация, настройки сессии). Не могут быть отключены;
                        </li>
                        <li className={styles.numberedItem}>
                            <strong>Аналитические</strong> — собирают обезличенную статистику посещаемости
                            (Яндекс.Метрика). Могут быть отключены в настройках браузера;
                        </li>
                    </ol>
                    <p className={styles.sectionText}>
                        8.3. Пользователь может управлять файлами cookie через настройки браузера:
                        блокировать все или отдельные cookie, удалять сохранённые cookie. Отключение
                        необходимых cookie может привести к некорректной работе сайта.
                    </p>
                </section>

                {/* 09. Права субъекта */}
                <section id="rights" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>09</span>
                        <h2 className={styles.sectionTitle}>Права субъекта персональных данных</h2>
                    </div>
                    <p className={styles.sectionText}>
                        9.1. В соответствии с ФЗ-152 Субъект имеет право:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Получать информацию об обработке своих персональных данных (ст. 14 ФЗ-152);
                        </li>
                        <li className={styles.numberedItem}>
                            Требовать уточнения, блокирования или уничтожения персональных данных,
                            если они являются неполными, устаревшими, неточными (ст. 14 ФЗ-152);
                        </li>
                        <li className={styles.numberedItem}>
                            Отозвать согласие на обработку персональных данных (ст. 9 ФЗ-152);
                        </li>
                        <li className={styles.numberedItem}>
                            Требовать удаления всех персональных данных («право на забвение»);
                        </li>
                        <li className={styles.numberedItem}>
                            Обжаловать действия Оператора в Роскомнадзор или в суд (ст. 17 ФЗ-152).
                        </li>
                    </ol>
                    <p className={styles.sectionText}>
                        9.2. Для реализации указанных прав Субъект направляет запрос на адрес
                        support@speechshield.ru с пометкой «Персональные данные». Запрос должен содержать:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>ФИО Субъекта;</li>
                        <li className={styles.numberedItem}>Адрес электронной почты, указанный при регистрации;</li>
                        <li className={styles.numberedItem}>Суть требования.</li>
                    </ol>
                    <p className={styles.sectionText}>
                        9.3. Оператор обязан дать ответ на запрос Субъекта или его представителя
                        в течение 30 (тридцати) календарных дней с момента получения запроса
                        (ст. 20 ФЗ-152).
                    </p>
                    <div className={styles.highlight}>
                        <p>
                            9.4. При отзыве согласия на обработку персональных данных Оператор прекращает
                            обработку и уничтожает данные в течение 30 (тридцати) календарных дней,
                            за исключением данных, хранение которых требуется по законодательству РФ
                            (бухгалтерская документация и т.д.).
                        </p>
                    </div>
                </section>

                {/* 10. Меры по защите данных */}
                <section id="security" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>10</span>
                        <h2 className={styles.sectionTitle}>Меры по защите данных</h2>
                    </div>
                    <p className={styles.sectionText}>
                        10.1. Оператор принимает необходимые и достаточные организационные и технические
                        меры для защиты персональных данных в соответствии с Постановлением Правительства
                        РФ от 01.11.2012 № 1119 и Приказом ФСТЭК России от 18.02.2013 № 21:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Шифрование данных при передаче (TLS/SSL) и хранении;
                        </li>
                        <li className={styles.numberedItem}>
                            Разграничение доступа к персональным данным между сотрудниками;
                        </li>
                        <li className={styles.numberedItem}>
                            Регулярное резервное копирование;
                        </li>
                        <li className={styles.numberedItem}>
                            Мониторинг и логирование доступа к данным;
                        </li>
                        <li className={styles.numberedItem}>
                            Хранение паролей в хешированном виде;
                        </li>
                        <li className={styles.numberedItem}>
                            Защита от несанкционированного доступа к серверной инфраструктуре;
                        </li>
                        <li className={styles.numberedItem}>
                            Регулярное обновление программного обеспечения и средств защиты.
                        </li>
                    </ol>
                    <p className={styles.sectionText}>
                        10.2. Доступ к персональным данным имеют только уполномоченные сотрудники Оператора,
                        которые ознакомлены с требованиями законодательства о персональных данных
                        и настоящей Политикой.
                    </p>
                    <p className={styles.sectionText}>
                        10.3. В случае инцидента, повлёкшего неправомерную передачу (утечку) персональных
                        данных, Оператор обязуется уведомить Роскомнадзор в течение 24 (двадцати четырёх)
                        часов с момента обнаружения инцидента, а также предоставить результаты внутреннего
                        расследования в течение 72 (семидесяти двух) часов (ст. 21.1 ФЗ-152).
                    </p>
                    <p className={styles.sectionText}>
                        10.4. Оператор обязуется незамедлительно уведомить Субъектов, чьи данные могли
                        быть затронуты инцидентом, о характере нарушения и принятых мерах.
                    </p>
                </section>

                {/* 11. Изменение Политики */}
                <section id="changes" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>11</span>
                        <h2 className={styles.sectionTitle}>Изменение Политики</h2>
                    </div>
                    <p className={styles.sectionText}>
                        11.1. Оператор вправе вносить изменения в настоящую Политику. Новая редакция
                        вступает в силу с момента размещения на сайте speechshield.ru/privacy.
                    </p>
                    <p className={styles.sectionText}>
                        11.2. Продолжение использования Платформы после внесения изменений означает
                        согласие Субъекта с новой редакцией Политики.
                    </p>
                    <p className={styles.sectionText}>
                        11.3. Дата последнего обновления указана в начале документа.
                    </p>
                </section>

                {/* 12. Контактная информация */}
                <section id="contacts" className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionNumber}>12</span>
                        <h2 className={styles.sectionTitle}>Контактная информация</h2>
                    </div>
                    <p className={styles.sectionText}>
                        12.1. По всем вопросам, связанным с обработкой персональных данных, Субъект может
                        обратиться к Оператору:
                    </p>
                    <ol className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            Электронная почта: support@speechshield.ru (с пометкой «Персональные данные»);
                        </li>
                        <li className={styles.numberedItem}>
                            Почтовый адрес: 423465, Республика Татарстан, г. Альметьевск,
                            ул. Белоглазова, д. 48, кв. 57;
                        </li>
                        <li className={styles.numberedItem}>
                            Телефон: +7 (919) 620-43-46.
                        </li>
                    </ol>
                    <p className={styles.sectionText}>
                        12.2. Уполномоченным органом по защите прав субъектов персональных данных является
                        Федеральная служба по надзору в сфере связи, информационных технологий и массовых
                        коммуникаций (Роскомнадзор), сайт: rkn.gov.ru.
                    </p>
                </section>

                {/* Contacts card */}
                <div className={styles.contacts}>
                    <h2 className={styles.contactsTitle}>Реквизиты оператора</h2>
                    <div className={styles.contactsGrid}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Наименование</div>
                            <div className={styles.contactValue}>ООО «СПИЧШИЛДДЕВЕЛОПМЕНТ»</div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>ИНН</div>
                            <div className={styles.contactValue}>6319267810</div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>ОГРН</div>
                            <div className={styles.contactValue}>1256300023913</div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Юридический адрес</div>
                            <div className={styles.contactValue}>423465, Республика Татарстан, г. Альметьевск, ул.
                                Белоглазова, д. 48, кв. 57
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Электронная почта</div>
                            <div className={styles.contactValue}>support@speechshield.ru</div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Телефон</div>
                            <div className={styles.contactValue}>+7 (919) 620-43-46</div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                &copy; 2026 SpeechShield. Все права защищены.
            </footer>
        </div>
    );
};

export default Privacy;

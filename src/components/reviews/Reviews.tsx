import { useState, useRef } from 'react';
import styles from './Reviews.module.css';
import oneAv from '../../assets/avatars/31a1bed54d5a6d7080bf6f415ba8bd0407de09ea.jpg';
import twoAv from '../../assets/avatars/b431380e45f5bfc53e2f1366a6eb63b952865aa6.jpg';
import threeAv from '../../assets/avatars/d28e51a77ed396bd1a68cf27ad05ced376c8ba8b.jpg';
import fourAv from '../../assets/avatars/fbb8532ed272017fa267924482614c10a5ce37ab.jpg';
import arrowPrev from '../../assets/icons/arrow_34.svg';

const Reviews = () => {
    const cardData = [
        {
            id: 1,
            text: 'За пробный период понял, что без этой программы уже не хочу стримить. Спокойнее, профессиональнее и реально полезная вещь.',
            avatar: fourAv,
            author: "— Денис Ш."
        },
        {
            id: 2,
            text: 'За пробный период понял, что без этой программы уже не хочу стримить. Спокойнее, профессиональнее и реально полезная вещь.',
            avatar: threeAv,
            author: "— Денис Ш."
        },
        {
            id: 3,
            text: 'За пробный период понял, что без этой программы уже не хочу стримить. Спокойнее, профессиональнее и реально полезная вещь.',
            avatar: twoAv,
            author: "— Денис Ш."
        },
        {
            id: 4,
            text: 'За пробный период понял, что без этой программы уже не хочу стримить. Спокойнее, профессиональнее и реально полезная вещь.',
            avatar: oneAv,
            author: "— Денис Ш."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const cardWidth = 440;
    const gap = 20;
    const cardsToShow = 3;
    const maxIndex = cardData.length - cardsToShow;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const diff = clientX - startX;
        setDragOffset(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = cardWidth / 3;
        if (dragOffset > threshold) {
            handlePrev();
        } else if (dragOffset < -threshold) {
            handleNext();
        }
        setDragOffset(0);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleDragEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) handleDragEnd();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleDragEnd();
    };

    const baseOffset = -currentIndex * (cardWidth + gap);
    const totalOffset = baseOffset + dragOffset;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Отзывы пользователей о <strong>SpeechShield</strong></h2>
            <div
                className={`${styles.carousel_wrapper} ${isDragging ? styles.dragging : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={carouselRef}
            >
                <div
                    className={styles.carousel}
                    style={{
                        transform: `translateX(${totalOffset}px)`,
                        transition: isDragging ? 'none' : 'transform 0.4s ease-in-out'
                    }}
                >
                    {cardData.map((item) => (
                        <div className={styles.card} key={item.id}>
                            <p className={styles.card_text}>{item.text}</p>
                            <div className={styles.card_footer}>
                                <img className={styles.avatar} src={item.avatar} alt={item.author} />
                                <p className={styles.author}>{item.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.pagination}>
                <button className={styles.arrow_btn} onClick={handlePrev}>
                    <img src={arrowPrev} className={styles.prev_arrow} alt="Previous" />
                </button>
                <button className={styles.arrow_btn} onClick={handleNext}>
                    <img src={arrowPrev} className={styles.next_arrow} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default Reviews;
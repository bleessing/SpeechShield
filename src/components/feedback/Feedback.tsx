import styles from './Feedback.module.css'
import {useState} from "react";
import {type SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    email: string
    telegram: string
    wishes: string
}


const Feedback = () => {
    const {register, handleSubmit} = useForm<Inputs>()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('https://speechshield.ru/api/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    telegram: data.telegram,
                    wishes: data.wishes,
                }),
            })
            if (!response.ok) {
                throw new Error('Ошибка отправки')
            }
            alert('Спасибо за ваше пожелание!')
        } catch (error) {
            alert('Произошла ошибка при отправке. Попробуйте позже.')
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <div id="feedback" className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.card_title}>Поделитесь идеями и пожеланиями</h1>
                <p className={styles.card_short}>Помогите нам сделать программу удобнее <br/>
                    и полезнее — мы читаем каждое сообщение</p>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <input className={styles.input} placeholder={'Почта'} {...register('email')}/>
                    <input className={styles.input} placeholder={'@Телеграм'} {...register('telegram')}/>
                    <textarea {...register('wishes')} className={styles.textarea} placeholder={'Ваши пожелания и предложения'} />
                    <button className={styles.button} type={"submit"} disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Отправить пожелание'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
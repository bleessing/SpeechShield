import styles from './Feedback.module.css'
import {useState} from "react";
import {type SubmitHandler, useForm} from "react-hook-form";
import {sendGoal} from '../../utils/metrika.ts';

type Inputs = {
    email: string
    telegram: string
    wishes: string
    website: string // honeypot — люди это поле не видят и не заполняют
}

const Feedback = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<Inputs>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [result, setResult] = useState<'success' | 'error' | null>(null)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // Бот заполнил скрытое поле — молча "принимаем", ничего не отправляя
        if (data.website) {
            setResult('success')
            reset()
            return
        }

        setIsSubmitting(true)
        setResult(null)
        try {
            const response = await fetch('https://api.speechshield.ru/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email.trim(),
                    telegram: data.telegram.trim(),
                    wishes: data.wishes.trim(),
                }),
            })
            if (!response.ok) {
                throw new Error('Ошибка отправки')
            }
            sendGoal('feedback_submit')
            setResult('success')
            reset()
        } catch {
            setResult('error')
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <div id="feedback" className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.card_title}>Поделитесь идеями и пожеланиями</h2>
                <p className={styles.card_short}>Помогите нам сделать программу удобнее <br/>
                    и полезнее — мы читаем каждое сообщение</p>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder={'Почта'}
                        aria-invalid={!!errors.email}
                        {...register('email', {
                            required: 'Укажите почту, чтобы мы могли ответить',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Похоже, в почте опечатка',
                            },
                        })}
                    />
                    {errors.email && <p className={styles.field_error}>{errors.email.message}</p>}

                    <input className={styles.input} placeholder={'@Телеграм'} {...register('telegram')}/>

                    <textarea
                        className={styles.textarea}
                        placeholder={'Ваши пожелания и предложения'}
                        aria-invalid={!!errors.wishes}
                        {...register('wishes', {
                            required: 'Напишите пару слов — иначе нам нечего читать :)',
                            minLength: {value: 10, message: 'Расскажите чуть подробнее (минимум 10 символов)'},
                            maxLength: {value: 2000, message: 'Слишком длинно — сократите до 2000 символов'},
                        })}
                    />
                    {errors.wishes && <p className={styles.field_error}>{errors.wishes.message}</p>}

                    {/* honeypot: скрыт от людей, боты заполняют */}
                    <input
                        className={styles.honeypot}
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        {...register('website')}
                    />

                    <button className={styles.button} type={"submit"} disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Отправить пожелание'}
                    </button>

                    {result === 'success' && (
                        <p className={styles.status_success} role="status">Спасибо за ваше пожелание!</p>
                    )}
                    {result === 'error' && (
                        <p className={styles.status_error} role="alert">Произошла ошибка при отправке. Попробуйте позже.</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Feedback;

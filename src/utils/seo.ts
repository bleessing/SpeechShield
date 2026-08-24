import {useEffect} from 'react';

/** Помечает страницу как noindex на время её жизни, возвращая исходное значение при уходе. */
export const useNoindex = () => {
    useEffect(() => {
        let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        const prev = meta?.content ?? null;
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'robots';
            document.head.appendChild(meta);
        }
        meta.content = 'noindex, nofollow';
        return () => {
            if (meta && prev !== null) meta.content = prev;
        };
    }, []);
};

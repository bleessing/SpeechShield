declare global {
    interface Window {
        ym?: (id: number, method: string, target: string) => void;
    }
}

export const YM_ID = 102179873;

export const sendGoal = (target: string) => {
    if (window.ym) window.ym(YM_ID, 'reachGoal', target);
};

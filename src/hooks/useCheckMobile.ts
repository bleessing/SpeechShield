import {useEffect, useState} from "react";

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return {
        isMobile: width <= 768,
    }
}
export default useCheckMobileScreen;
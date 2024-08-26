// useAnimationInView.ts
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export function useAnimationInView(options = { triggerOnce: false, threshold: 0.1 }) {
    const { ref, inView } = useInView(options);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setShouldAnimate(true);
        }
    }, [inView]);

    return { ref, shouldAnimate };
}

import { useEffect, useRef } from 'react';

    const Canvas = (draw: (context: CanvasRenderingContext2D, count: number) => void, ...rest: any[]) => {

        const ref = useRef<HTMLCanvasElement | null>(null);
        useEffect(() => {
            const canvas = ref.current;
            if (!canvas) return;

            const context = canvas.getContext('2d');
            if (!context) return;

            let count = 0;
            let animationID: number;

            const renderer = () => {
                count++;
                // draw here
                draw(context, count);
                animationID = window.requestAnimationFrame(renderer);
            };
            renderer();
            return () => window.cancelAnimationFrame(animationID);
        }, [draw]);

        return <canvas ref={ref} {...rest} />;
    };


export default {Canvas}
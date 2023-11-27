import { useEffect } from 'react';

export function useCursorStyle(hovered) {
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);
}
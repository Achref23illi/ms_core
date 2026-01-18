'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

/**
 * Redux Store Provider
 * Wrap your app with this provider to enable Redux state management
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef(store);

    return <Provider store={storeRef.current}>{children}</Provider>;
}

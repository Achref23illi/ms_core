'use client';

import { Provider } from 'react-redux';
import { store } from './store';

/**
 * Redux Store Provider
 * Wrap your app with this provider to enable Redux state management
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}

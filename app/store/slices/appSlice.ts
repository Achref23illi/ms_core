import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * App Slice
 * Global application state (theme, locale, loading, etc.)
 */

export interface AppState {
    theme: 'light' | 'dark' | 'system';
    locale: string;
    isLoading: boolean;
    isSidebarOpen: boolean;
}

const initialState: AppState = {
    theme: 'system',
    locale: 'en',
    isLoading: false,
    isSidebarOpen: true,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<AppState['theme']>) => {
            state.theme = action.payload;
        },
        setLocale: (state, action: PayloadAction<string>) => {
            state.locale = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.isSidebarOpen = action.payload;
        },
    },
});

export const {
    setTheme,
    setLocale,
    setLoading,
    toggleSidebar,
    setSidebarOpen
} = appSlice.actions;

export default appSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * User Slice
 * User authentication and profile state
 */

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role: 'user' | 'admin' | 'moderator';
}

export interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    isAuthLoading: boolean;
    authError: string | null;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    isAuthLoading: false,
    authError: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isAuthenticated = action.payload !== null;
            state.authError = null;
        },
        setAuthLoading: (state, action: PayloadAction<boolean>) => {
            state.isAuthLoading = action.payload;
        },
        setAuthError: (state, action: PayloadAction<string | null>) => {
            state.authError = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.authError = null;
        },
        updateUserProfile: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },
    },
});

export const {
    setUser,
    setAuthLoading,
    setAuthError,
    logout,
    updateUserProfile
} = userSlice.actions;

export default userSlice.reducer;

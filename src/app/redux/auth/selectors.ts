import { RootState } from '@/app/redux/store';
export const selectToken = (state: RootState) => state.auth.token;

export const selectError = (state: RootState) => state.auth.error;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectUser = (state: RootState) => state.auth.user;
export const selectUserId = (state: RootState) => state.auth.user.id;

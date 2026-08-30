import { createSlice } from '@reduxjs/toolkit';
import {
  registerNewUser,
  loginUser,
  logOutUser,
  refreshUser,
} from './operations';
import type { User } from '@/types';

interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: { id: '', name: '', email: '' },
  token: null, // на самом деле он тут не нужен так как supabase.auth.getSession() - сам достанет токен. это чисто для примера что обычно нужно.

  isLoggedIn: false,
  isRefreshing: true, //НЕ делаем вывод об авторизации сразу. сначала ждём refreshUser(). по сути isRefreshing отвечает на  вопрос: «мы уже закончили проверять авторизацию?»

  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // registerNewUser;
    builder
      .addCase(registerNewUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(registerNewUser.fulfilled, (state) => {
        state.loading = false;
      })

      // loginUser
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const userName = action.payload.user.user_metadata.userName;

        state.loading = false;

        state.user = {
          id: action.payload.user.id,
          name: typeof userName === 'string' ? userName : '',
          email: action.payload.user.email ?? '',
        };

        state.token = action.payload.session.access_token;
        state.isLoggedIn = true;
      })

      // logOutUser
      .addCase(logOutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.loading = false;

        state.user = { id: '', name: '', email: '' };

        state.token = null;
        state.isLoggedIn = false;
      })

      // refreshUser
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;

        if (!action.payload) {
          return;
        }

        const userName = action.payload.user.user_metadata.userName;

        state.user = {
          id: action.payload.user.id,
          name: typeof userName === 'string' ? userName : '',
          email: action.payload.user.email ?? '',
        };

        state.token = action.payload.access_token;

        state.isLoggedIn = true;
      });
  },
});

export default authSlice.reducer;

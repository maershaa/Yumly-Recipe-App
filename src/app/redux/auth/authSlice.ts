import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  registerNewUser,
  loginUser,
  logOutUser,
  refreshUser,
} from './operations';
import { User } from '@/types';

interface initialState {
  user: User;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: null | string;
  loading: boolean;
}

const initialState: initialState = {
  user: { id: '', name: '', email: '' },
  token: null, //! на самом деле он тут не нужен так как supabase.auth.getSession() - сам достанет токен. это чисто для примера что обычно нужно.

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
      .addCase(
        registerNewUser.rejected,
        (state, action: PayloadAction<null | string>) => {
          state.loading = false;
          state.error = action.payload;
        },
      )
      .addCase(registerNewUser.fulfilled, (state) => {
        state.loading = false;
      })

      // loginUser
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.rejected,
        (state, action: PayloadAction<null | string>) => {
          state.loading = false;
          state.error = action.payload;
        },
      )
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user.name = action.payload.user.user_metadata.userName;
        // console.log('🚀 ~ action.payload:', action.payload);
        //         session
        // :
        // {access_token: 'eyJhbGciOiJFUzI1NiIsImtpZCI6ImJiZDJjMzFlLTRjY2YtND…tDPGvmrizCMeH4Q-ltEc02i43gLPEAWx5cNt3Dhw7ooPU5P7A', token_type: 'bearer', expires_in: 3600, expires_at: 1787138996, refresh_token: 'ryog6uknsllk', …}
        // user
        // :
        // {id: '11d715f6-76b9-49e9-8988-967f6e924a40', aud: 'authenticated', role: 'authenticated', email: 'efremovav.s@gmail.com', email_confirmed_at: '2026-06-15T12:55:53.605304Z', …}
        state.user.email = action.payload.user.email;
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
        state.error = action.payload;
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
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        if (!action.payload) {
          return;
        }
        state.user.name = action.payload.user.user_metadata.userName;
        state.user.id = action.payload.user.id;
        state.user.email = action.payload.user.email;
        state.token = action.payload.access_token;
        state.isLoggedIn = true;
      });
  },
});

export default authSlice.reducer;

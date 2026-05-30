import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../../../supabaseClient';

const registerNewUser = createAsyncThunk(
  'auth/postNewUser',
  async (newUser, thunkApi) => {
    console.log('запускаем registerNewUser');
    const { userName, email, password } = newUser;
    try {
      const response = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            userName,
            emailRedirectTo:
              'https://maershaa.github.io/Yumly-Recipe-App/auth/login',
          },
        },
      });
      console.log('response в registerNewUser', response);
      // !Почему если неверно ввели пароль то тоже статут fulfilled а не ошибка??
      // Это обработать тут или где?

      return response.data.user;
    } catch (error) {
      console.log('не удалось');
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const loginUser = createAsyncThunk('auth/login', async (user, thunkApi) => {
  const { email, password } = user;
  try {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log('🚀 loginUser ~ response:', response);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const logOutUser = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const response = await supabase.auth.signOut();
    console.log('🚀 logOutUser ~ response:', response);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

/* const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    // If there is a token, add it to the HTTP header and perform the request
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/me');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}); */

export {
  registerNewUser,
  loginUser,
  logOutUser,
  // refreshUser
};

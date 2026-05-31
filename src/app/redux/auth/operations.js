import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../../../supabaseClient';

const registerNewUser = createAsyncThunk(
  'auth/postNewUser',
  async (newUser, thunkApi) => {
    console.log('запускаем registerNewUser');
    const { userName, email, password } = newUser;
    try {
      const { data, error } = await supabase.auth.signUp({
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

      if (error) {
        return thunkApi.rejectWithValue(error.message);
      }

      return data.user;
    } catch (error) {
      console.log('не удалось');
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const loginUser = createAsyncThunk('auth/login', async (user, thunkApi) => {
  const { email, password } = user;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return thunkApi.rejectWithValue(error.message);
    }
    return data;
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

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export { registerNewUser, loginUser, logOutUser, refreshUser };

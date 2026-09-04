import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage } from '@/utils';
import type {
  User as SupabaseUser,
  Session as SupabaseSession,
} from '@supabase/supabase-js';

import type { RegisterFormData, LoginFormData } from '@/types';

const registerNewUser = createAsyncThunk<
  SupabaseUser | null,
  RegisterFormData,
  { rejectValue: string }
>('auth/postNewUser', async (newUser, thunkApi) => {
  const { userName, email, password } = newUser;
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
    return thunkApi.rejectWithValue(getErrorMessage(error));
  }

  return data.user;
});

const loginUser = createAsyncThunk<
  {
    user: SupabaseUser;
    session: SupabaseSession;
  },
  LoginFormData,
  { rejectValue: string }
>('auth/login', async (user, thunkApi) => {
  const { email, password } = user;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return thunkApi.rejectWithValue(getErrorMessage(error));
  }

  return data;
});

const logOutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, thunkApi) => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);

const refreshUser = createAsyncThunk<
  SupabaseSession | null,
  void,
  { rejectValue: string }
>('auth/refresh', async (_, thunkApi) => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return thunkApi.rejectWithValue(getErrorMessage(error));
  }

  return data.session;
});

export { registerNewUser, loginUser, logOutUser, refreshUser };

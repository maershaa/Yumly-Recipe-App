import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../../supabase/supabaseClient';

const fetchTags = createAsyncThunk('tags/getTags', async (_, thunkApi) => {
  try {
    const { data, error } = await supabase.from('recipes').select('tags');

    if (error) {
      return thunkApi.rejectWithValue(error.message);
    }

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export { fetchTags };

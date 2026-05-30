import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// https://supabase.com/docs/reference/javascript/introduction - документация JS
// https://www.youtube.com/watch?v=fZkjQrS9E2M - классная инструкция
// https://www.youtube.com/watch?v=HGMexHwYy_A&list=PLl6EcvA_AoxEFqwT_rNs1uZnnf7LSEoji&index=2 - СRUD


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseclient=async (supabaseAccesstoken)=>{
    const supabase = createClient(supabaseUrl, supabaseKey,{
        global:{
            headers:{
                Authrization:`Bearer ${supabaseAccesstoken}`,
            }
        }
    });

    return supabase;


}

export default supabase
        
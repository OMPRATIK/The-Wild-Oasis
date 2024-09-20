import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fwjgfhwsbsuoheinokkt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3amdmaHdzYnN1b2hlaW5va2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNTQ2NTEsImV4cCI6MjA0MTYzMDY1MX0.NbTgS-O4YjVwsWhKjtgKlLWDorZNo4uDeoaqzA-pKi8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

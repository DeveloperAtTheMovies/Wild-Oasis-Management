import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://afpbazjrhqbbpvencfat.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmcGJhempyaHFiYnB2ZW5jZmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NzMyMjYsImV4cCI6MjAyOTU0OTIyNn0.3cVkycWbugAJBcNQ77elQvRhJzzToPW6FQao-QzGdCI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

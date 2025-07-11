import { createClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  const client = createClient(
    process.env.SUPABASE_URL || "https://dheemzbpykhiqxnqdosc.supabase.co",
    process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZWVtemJweWtoaXF4bnFkb3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyOTY4NjUsImV4cCI6MjA1Mjg3Mjg2NX0.9zMLDgpQjZ4aowjgAwTPYJL3_JWlmkcnhAM-Ef9ab50"
  );

  return client;
}

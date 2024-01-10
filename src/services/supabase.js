import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tetiqqsemqqzwoutqfqy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldGlxcXNlbXFxendvdXRxZnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwODM1ODIsImV4cCI6MjAxODY1OTU4Mn0.39YlDzT8YNptKi-_uB7jXd6izFH-v2u-voZfhtb4tM8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

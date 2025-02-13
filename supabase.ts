import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://mykkcfoodgidhglisvtn.supabase.co';


const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15a2tjZm9vZGdpZGhnbGlzdnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzOTk5ODAsImV4cCI6MjA1NDk3NTk4MH0.VhbMOODg3TxdHX9VNv8HacIRS23W0fV7xnxV706IhUI';

// Criando a conexão com Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

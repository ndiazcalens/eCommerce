import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://pmqnoelqqhpznprjhlsz.supabase.co'; 
// URL del proyecto Supabase (la que te da el dashboard)
// Esto indica a qué base de datos conectarse

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtcW5vZWxxcWhwem5wcmpobHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNjEzNTcsImV4cCI6MjA2MDgzNzM1N30.KGxeIj22WmRuy-lY4MkK1NTCNllfquc-9GEN0OKJfXE';
// Clave pública de acceso (anon key), también la encontrás en Supabase
// Esta clave permite acceso a ciertas tablas según la configuración de seguridad

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 
// Se crea una instancia del cliente de Supabase con la URL y la key
// Este cliente se va a usar para hacer querys, insertar datos, etc.
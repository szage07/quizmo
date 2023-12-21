// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//import supabase
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xeajiibztieslaxpthsi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYWppaWJ6dGllc2xheHB0aHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NzIyOTMsImV4cCI6MjAxNjE0ODI5M30.LRNjtF1rSZZjXOvi5SKMWIZidvUSHpfZj_JZqrxK71c')


export{supabase};
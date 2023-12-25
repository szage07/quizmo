// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//import supabase
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xeajiibztieslaxpthsi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYWppaWJ6dGllc2xheHB0aHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NzIyOTMsImV4cCI6MjAxNjE0ODI5M30.LRNjtF1rSZZjXOvi5SKMWIZidvUSHpfZj_JZqrxK71c')

function successNotification (message, seconds = 5){
    document.querySelector(".alert-success").classList.remove("d-none");
    document.querySelector(".alert-success").classList.add("d-block");
    document.querySelector(".alert-success").innerHTML = message;

    if (seconds != 0) {
        setTimeout(function () {
            document.querySelector(".alert-success").classList.remove("d-block");
            document.querySelector(".alert-success").classList.add("d-none");      
        }, seconds * 1000);
    }
}

function errorNotification (message, seconds = 5){
    document.querySelector(".alert-danger").classList.remove("d-none");
    document.querySelector(".alert-danger").classList.add("d-block");
    document.querySelector(".alert-danger").innerHTML = message;

    if (seconds != 0) {
        setTimeout(function () {
            document.querySelector(".alert-danger").classList.remove("d-block");
            document.querySelector(".alert-danger").classList.add("d-none");      
        }, seconds * 1000);
    }
}

export{supabase, successNotification, errorNotification};
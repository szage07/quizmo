import { supabase, successNotification, errorNotification } from "../main";

const login_form = document.getElementById("login_form");

login_form.onsubmit = async (e) => {
    e.preventDefault();

    alert("login");
};
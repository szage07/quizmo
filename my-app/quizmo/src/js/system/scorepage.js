import { supabase, successNotification, errorNotification,dologout } from "../main";

const logout_btn = document.getElementById("logout_btn");

logout_btn.onclick = dologout;
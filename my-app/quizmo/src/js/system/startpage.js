import { supabase, successNotification, errorNotification } from "../main";

const logout_btn = document.getElementById("logout_btn");

logout_btn.onclick = async () => {
 alert("clicked");

 let { error } = await supabase.auth.signOut()
 if(error == null){
    successNotification("Logout Successfully!");
    localStorage.clear();
    window.location.pathname = '/index.html';
 }
 else{
    errorNotification("Logout Failed!!",5);
 }
}
import { supabase, successNotification, errorNotification } from "../main";

const login_form = document.getElementById("login_form");

login_form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(login_form);

    
let { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  

  console.log(data);

  let session = data.session;
  let user = data.user;

  console.log(session);
  if(session != null){
     localStorage.setItem("session_token",session.access_token)
     localStorage.setItem("refresh_token",session.refresh_token)
  }
  if (error == null){
    successNotification("Login Successfully!");
    window.location.pathname='/startpage.html';
  } 
  
  else {
      errorNotification("Something went wrong. Unable to login.",5);
      console.log(error);
  }
  login_form.reset();

  document.querySelector("#login_form button").disabled = false;
  document.querySelector("#login_form button").innerHTML = 'Log in';

 // window.location.pathname='/startpage.html';
};
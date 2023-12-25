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

  if (error == null) successNotification("Login Successfully!");
  else {
      errorNotification("Something went wrong. Unable to login.",5);
      console.log(error);
  }
  login_form.reset();

  document.querySelector("#login_form button").disabled = false;
  document.querySelector("#login_form button").innerHTML = 'Log in';

 // window.location.pathname='/startpage.html';
};
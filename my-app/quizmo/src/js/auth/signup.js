import { supabase, successNotification, errorNotification } from "../main";

const signup_form = document.getElementById('signup_form');

signup_form.onsubmit = async (e) => {
    e.preventDefault();
   
    document.querySelector("#signup_form button").disabled = true;
    document.querySelector(
         "#signup_form button"
    ).innerHTML = '<div class="spinner-border me-2" role="status"> </div> <span>Loading...</span>';
   

    const formData = new FormData(signup_form);
 if (formData.get("password") == formData.get("confirm_password")){
   
    const { data, error } = await supabase.auth.signUp({
        email: formData.get("email"),
        password: formData.get("password"),
      });

     let user_id = data.user.id
     if (user_id != null) {  
        const { data, error } = await supabase
        .from("user_infos")
        .insert([
       { 
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        birthdate: formData.get("birthdate"),
        user_id: user_id,

       },
      ])
   .select();
        
     
    if (error == null) successNotification("Registered Successfully! <a href='./index.html'> Click here to LogIn!</a>", 5);
    else {
        errorNotification("Something went wrong. Unable to register.", 5);
        console.log(error);
    }

 signup_form.reset();
 document.querySelector("#signup_form button").disabled = false;
 document.querySelector("#signup_form button").innerHTML = 'Sign up';
  }
 }
};

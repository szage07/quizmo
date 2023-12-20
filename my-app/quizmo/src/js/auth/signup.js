import { supabase } from "../main";

const signup_form = document.getElementById('signup_form');

signup_form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(signup_form);
    if( formData.get("password") == formData.get("confirm_password")){
     
     

        
const { data, error } = await supabase.auth.signUp({
    email:formData.get("email"),
    password:formData.get("password"),
  })

    let user_id = data.user.id;

    if(user_id != null){ // corrected here
        const { data, error } = await supabase
        .from('user_infos')
        .insert([
          { firstname: formData.get("firstname"), 
            lastname: formData.get("lastname"),
            birthdate: formData.get("birthdate"),
            user_id: user_id,
            birthdate: formData.get("mobile_number"),
        },

        ])
        .select()
    }

        

   console.log(data);
   console.log(error);


    }

};

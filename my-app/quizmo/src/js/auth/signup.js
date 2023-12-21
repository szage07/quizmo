

const signup_form = document.getElementById('signup_form');

signup_form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(signup_form);
    if (formData.get("password") == formData.get("confirm_password")) {
        const { data, error } = await supabase.auth.signUp({
            email: formData.get("email"),
            password: formData.get("password"),
            
        });
    console.log(data);
        if (error) {
            console.error(error);
            return;
        }

        if (user) {
            const { data: insertData, error: insertError } = await supabase
                .from('user_infos')
                .insert([
                    {
                        firstname: formData.get("firstname"),
                        lastname: formData.get("lastname"),
                        birthdate: formData.get("birthdate"),
                        user_id: user.id,
                        
                    },
                ])
                .select();

            if (insertError) {
                console.error(insertError);
                return;
            }

            console.log(insertData);
        }
        signup_form.reset();
    }
};

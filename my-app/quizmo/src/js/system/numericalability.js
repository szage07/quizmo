import { supabase } from "../main";

document.addEventListener('DOMContentLoaded', async () => {
    const storedTokenData = localStorage.getItem('sb-xeajiibztieslaxpthsi-auth-token');

    if (storedTokenData) {
        const tokenData = JSON.parse(storedTokenData);
        const userId = tokenData?.user?.id;

        if (userId) {
            localStorage.setItem('userId', userId); // Store the user ID in local storage
        } else {
            console.error('User ID not found in stored token data.');
        }
    } else {
        console.error('No token data found in localStorage.');
    }

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.addEventListener('change', handleUserResponse);
    });
});

function handleUserResponse(event) {
    const questionNumber = event.target.closest('.question').getAttribute('data-question-number');
    console.log('Question Number:', questionNumber);
    const selectedValue = event.target.value;

    const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage

    if (userId) {
        supabase
            .from('questions')
            .update({
                users_choice: selectedValue,
                quiz_taker: userId // Update the quiz_taker column with the user ID
            })
            .eq('question_id', questionNumber)
            .then(response => {
                console.log('User response updated:', response);

                // Log the updated data
                console.log('Updated Data:', {
                    question_id: questionNumber,
                    users_choice: selectedValue,
                    quiz_taker: userId
                });
            })
            .catch(error => {
                console.error('Error updating user response:', error);
            });
    } else {
        console.error('User ID not available.');
    }
}

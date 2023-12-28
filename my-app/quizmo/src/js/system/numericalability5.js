import { supabase } from "../main";

document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.addEventListener('change', handleUserResponse);
    });
});

function handleUserResponse(event) {
    const questionNumber = event.target.closest('.question').getAttribute('data-question-number');
    console.log('Question Number:', questionNumber); 
    const selectedValue = event.target.value;

    // Assuming you have a table named 'questions' in your Supabase database
    supabase
        .from('questions')
        .update({
            users_choice: selectedValue
        })
        .eq('question_id', questionNumber) // Update where 'question_id' matches the specific question number
        .then(response => {
            console.log('User response updated:', response);

            // Log the updated data
            console.log('Updated Data:', {
                question_id: questionNumber,
                users_choice: selectedValue
            });
        })
        .catch(error => {
            console.error('Error updating user response:', error);
        });
}

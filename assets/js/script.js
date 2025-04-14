// Function to handle form submission
async function submitForm(event) {
    event.preventDefault();  // Prevent the default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    try {
        // Send form data to your API Gateway
        const response = await fetch('https://3l9kn0lqoi.execute-api.us-east-1.amazonaws.com/prod', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Handle the response from the Lambda function
        if (response.ok) {
            const responseBody = await response.json();
            alert(responseBody.message || 'Form submitted successfully!');
        } else {
            alert('Error submitting form.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form.');
    }
}

// Attach the submitForm function to the form submission event
document.getElementById('contactForm').addEventListener('submit', submitForm);




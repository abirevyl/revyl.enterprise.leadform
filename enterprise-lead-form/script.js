document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Here you would typically send the data to your backend
            // For demonstration, we'll just show success and redirect
            successMessage.classList.remove('hidden');
            
            // Simulate form submission delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Redirect to Cal.com booking page
            window.location.href = 'https://cal.com/landseer-enga/book-a-demo';
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    });
});

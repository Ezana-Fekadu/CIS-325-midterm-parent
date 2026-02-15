document.addEventListener('DOMContentLoaded', () => {
    const linkedInButton = document.getElementById('linkedInButton');
    const emailButton = document.getElementById('emailButton');

    linkedInButton.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/in/ezana-fekadu';
    });

    //TODO: Update the email address to the correct one in the future 
    emailButton.addEventListener('click', () => {
        window.location.href = 'mailto:jowen22@murraystate.edu';
    });
});
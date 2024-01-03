document.getElementById('linkedin').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/brandonwang05/', '_blank').focus(); 
});

document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/SirBrandolf', '_blank').focus()
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebar_buttons = document.querySelectorAll('#sidebar a');

    function handleSidebarClick(event) {
        event.preventDefault();

        sidebar_buttons.forEach(sidebar_button => sidebar_button.classList.remove('active'));

        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);

        const sections = document.querySelectorAll('.right-column-content');
        sections.forEach(section => section.style.display = 'none');

        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    sidebar_buttons.forEach(sidebar_button => {
        sidebar_button.addEventListener('click', handleSidebarClick);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const subject = document.getElementById('subject').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Use EmailJS to send the email
        emailjs.send("service_1ka1ay3", "template_u5hzkng", {
            subject: subject,
            email: email,
            message: message
        }).then(function(response) {
            alert('Email sent successfully!');
            form.reset();
        }, function(error) {
            alert('Failed to send email. Please try again later.');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        sendEmail();
    });

    function sendEmail() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const bodyMessage = `Full Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "mathys.quier.pro@gmail.com",
            Password: "03CD7EB02954C938EB5ECE1B757D40FFA2C6",
            To: 'mathys.quier.pro@gmail.com',
            From: "mathys.quier.pro@gmail.com",
            Subject: "Contact Form Submission",
            Body: bodyMessage
        }).then(
            function (message) {
                if (message === "OK") {
                    playSuccessAnimation();
                    showSuccessMessage();
                    form.reset();
                    shakeFormFields();
                } else {
                    alert("Email failed to send. Please try again.");
                }
            }
        );
    }

    function playSuccessAnimation() {
        anime({
            targets: 'button[type="submit"]',
            rotate: '1turn',
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    }

    function showSuccessMessage() {
        Swal.fire({
            title: "Good job!",
            text: "Message sent successfully!",
            icon: "success"
        });
    }

    function shakeFormFields() {
        const formFields = document.querySelectorAll('.field .item');

        formFields.forEach(field => {
            field.classList.add('shake');
            field.addEventListener('animationend', () => {
                field.classList.remove('shake');
            });
        });
    }
});

function scrollToHome() {
            // Animation de défilement vers la droite
            $('html, body').animate({
                scrollLeft: 0
            }, 800);
        }
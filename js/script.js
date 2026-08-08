// Menu responsive

var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");

hamburger.onclick = function () {

    menu.classList.toggle("active");

};

// Animation des statistiques

function compteur(id, fin) {

    var nombre = 0;

    var interval = setInterval(function () {

        nombre++;

        document.getElementById(id).innerHTML = nombre;

        if (nombre == fin) {

            clearInterval(interval);

        }

    }, 40);

}

compteur("membres", 10000);
compteur("regions", 2);
compteur("produits", 25);




/*======================================
    GALERIE PRODUITS
=======================================*/

var cartes = document.querySelectorAll(".produit");

for (var i = 0; i < cartes.length; i++) {

    cartes[i].onmouseover = function () {

        this.style.border = "2px solid #2e8b57";

    }

    cartes[i].onmouseout = function () {

        this.style.border = "none";

    }

}




// ==========================================
//  VALIDATION DU FORMULAIRE DE CONTACT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const lastname = document.getElementById('lastname');
    const firstname = document.getElementById('firstname');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const success = document.getElementById('formSuccess');

    function validateField(input, errorId, condition, message) {
        const errorSpan = document.getElementById(errorId);
        if (!condition) {
            input.classList.add('error');
            errorSpan.textContent = message;
            return false;
        } else {
            input.classList.remove('error');
            errorSpan.textContent = '';
            return true;
        }
    }

    lastname.addEventListener('blur', function() {
        validateField(this, 'lastnameError', this.value.trim().length >= 2, 'Le nom est requis (minimum 2 caractères).');
    });
    firstname.addEventListener('blur', function() {
        validateField(this, 'firstnameError', this.value.trim().length >= 2, 'Le prénom est requis (minimum 2 caractères).');
    });
    email.addEventListener('blur', function() {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value.trim());
        validateField(this, 'emailError', isValid, 'Veuillez entrer un email valide.');
    });
    subject.addEventListener('blur', function() {
        validateField(this, 'subjectError', this.value.trim().length >= 3, 'Le sujet est requis (minimum 3 caractères).');
    });
    message.addEventListener('blur', function() {
        validateField(this, 'messageError', this.value.trim().length >= 10, 'Le message doit contenir au moins 10 caractères.');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const isLastnameValid = validateField(lastname, 'lastnameError', lastname.value.trim().length >= 2, 'Le nom est requis.');
        const isFirstnameValid = validateField(firstname, 'firstnameError', firstname.value.trim().length >= 2, 'Le prénom est requis.');
        const isEmailValid = validateField(email, 'emailError', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()), 'Email invalide.');
        const isSubjectValid = validateField(subject, 'subjectError', subject.value.trim().length >= 3, 'Le sujet est requis.');
        const isMessageValid = validateField(message, 'messageError', message.value.trim().length >= 10, 'Message trop court.');

        if (isLastnameValid && isFirstnameValid && isEmailValid && isSubjectValid && isMessageValid) {
            success.style.display = 'flex';
            form.reset();
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
            setTimeout(() => { success.style.display = 'none'; }, 6000);
        }
    });
});
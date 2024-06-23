document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío

    // Obtener valores de los campos 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // para el mensaje de error
    let hasError = false;

    // Validar el campo de nombre
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'El nombre debe tener al menos 3 caracteres.';
        document.getElementById('nameError').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Validar el campo de Mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'El correo electrónico no es válido.';
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validar el campo contraseña
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        document.getElementById('passwordError').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // Si no hay errores, mensaje de éxito
    if (!hasError) {
        alert('Formulario enviado exitosamente!');
        // Aquí puedes agregar el código para enviar el formulario
        // o realizar otras acciones necesarias.
    }
});


document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('registroForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Verificar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Crear el objeto de datos para enviar
        const nuevoUsuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contraseña: password,
            activo: true, // O ajusta según tus necesidades
            administrador: 0 // O ajusta según tus necesidades
        };

        // Enviar los datos al servidor
        fetch('https://Alipais.pythonanywhere.com/api-favorite_cake/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
        }).then(response => response.json())
          .then(data => {
              console.log('Success:', data);
                // Redirigir a otra página
                window.location.href = 'confirmacion_registro.html';
          })
          .catch((error) => {
              console.error('Error:', error);
              alert('Ocurrió un error al registrar el usuario.');
          });
    });

});

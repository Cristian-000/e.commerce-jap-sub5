document.addEventListener("DOMContentLoaded", () => {        //1
    const loginForm = document.getElementById("login-form"); //2
  
    loginForm.addEventListener("submit", (e) => {  //3
      e.preventDefault(); //4
  
      const username = document.getElementById("username").value;  //5
      const password = document.getElementById("password").value;  //5
  
      // Validación de campos no vacíos
      if (username.trim() === "" || password.trim() === "") {  //6
        alert("Por favor, ingrese usuario y contraseña.");
      } else {
        // Guardar autenticación en localStorage
        localStorage.setItem("isAuthenticated", "true"); //7
  
        // Redireccionar a la página de portada //8
        window.location.href = "index.html";
      }
    });
  });
  /*
  Este código en JavaScript encapsula la funcionalidad básica de autenticación en un formulario de inicio de sesión, 
  asegurando que los campos estén completos y permitiendo la persistencia de la autenticación a través del almacenamiento local del navegador.

 1  DOMContentLoaded Evento: Espera a que todos los elementos de la página web se carguen en el navegador antes de ejecutar el código.
    Esto asegura que los elementos necesarios estén disponibles para su manipulación.

 2  Obtención de Formulario: Se obtiene una referencia al formulario de inicio de sesión en el DOM utilizando su ID.
    Esta referencia permitirá interactuar con los campos y eventos del formulario.

 3  Evento de Envío (submit): Se añade un "event listener" al evento de envío (submit) del formulario. 
    Cuando el usuario hace clic en el botón de envío, se activará este listener.

 4  Prevenir Recarga: La función e.preventDefault() detiene el comportamiento predeterminado del formulario,
    que sería recargar la página al enviar. Esto permite manejar la lógica de autenticación sin recargar la página.

 5  Obtención de Datos: Los valores de usuario y contraseña se obtienen de los campos correspondientes del formulario. 
    Estos valores se capturan para su posterior procesamiento.

 6  Validación No Vacía: Se verifica si los campos de usuario y contraseña están vacíos después de eliminar cualquier espacio en blanco.
    Si al menos uno de los campos está vacío, se muestra una alerta al usuario para que complete ambos campos.

 7  Almacenamiento Local: Si ambos campos tienen contenido, se guarda una marca de autenticación en el almacenamiento local del navegador
    Esto permite mantener un registro de que el usuario está autenticado en futuras interacciones con la página.

 8  Redirección: Después de autenticar, el navegador redirige al usuario a la página de "index.html". 
    Esto lleva al usuario a la página principal de la aplicación después de iniciar sesión exitosamente.
*/

/*

DOMContentLoaded Evento: Espera a que el DOM se cargue por completo.

Obtención de Formulario: Accede al formulario de inicio de sesión por su ID.

Evento de Envío (submit): Escucha el envío del formulario.

Prevenir Recarga: Detiene la recarga de la página al enviar el formulario.

Obtención de Datos: Recoge los valores de usuario y contraseña.

Validación No Vacía: Comprueba si los campos están llenos.

Almacenamiento Local: Guarda "autenticado" en almacenamiento local.

Redirección: Cambia a "index.html" después de autenticar.
*/
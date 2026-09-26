document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de Carrito en localStorage
  if (!localStorage.getItem('paw_cart')) {
    localStorage.setItem('paw_cart', JSON.stringify([]));
  }

  // Cargar Regiones y Comunas si existen los selectores
  const regionSelect = document.getElementById('region-select');
  const comunaSelect = document.getElementById('comuna-select');

  if (regionSelect && comunaSelect && typeof chileRegions !== 'undefined') {
    chileRegions.forEach((reg, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = reg.region;
      regionSelect.appendChild(option);
    });

    regionSelect.addEventListener('change', (e) => {
      comunaSelect.innerHTML = '<option value="">Selecciona una Comuna</option>';
      const selectedIndex = e.target.value;
      if (selectedIndex !== "") {
        chileRegions[selectedIndex].comunas.forEach(comuna => {
          const opt = document.createElement('option');
          opt.value = comuna;
          opt.textContent = comuna;
          comunaSelect.appendChild(opt);
        });
      }
    });
  }
});

// Función global para agregar productos
function addToCart(productId, name, price, image) {
  let cart = JSON.parse(localStorage.getItem('paw_cart')) || [];
  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ id: productId, name: name, price: price, image: image, quantity: 1 });
  }

  localStorage.setItem('paw_cart', JSON.stringify(cart));
  alert(`¡${name} fue agregado al carrito de Paw&Pearl!`);
}


document.addEventListener('DOMContentLoaded', () => {

  // 1. FORMULARIO DE CONTACTO (contacto.html)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      mostrarAlertaExito(
        contactForm,
        '¡Consulta enviada con éxito!',
        'Hemos recibido tu mensaje. Nos pondremos en contacto contigo a la brevedad.'
      );

      contactForm.reset();
    });
  }

  // 2. FORMULARIO DE LOGIN (login.html)
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      mostrarAlertaExito(
        loginForm,
        '¡Inicio de sesión exitoso!',
        'Redirigiéndote a tu cuenta...'
      );

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    });
  }


  // 3. FORMULARIO DE REGISTRO (registro.html)
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      mostrarAlertaExito(
        registerForm,
        '¡Registro realizado con éxito!',
        'Tu cuenta Paw&Pearl ha sido creada. Redirigiéndote para iniciar sesión...'
      );

      registerForm.reset();

      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2500);
    });
  }


  // FUNCIÓN REUTILIZABLE PARA ALERTAS DE ÉXITO
  function mostrarAlertaExito(formulario, titulo, mensaje) {
    // Eliminar alerta previa en el formulario si ya existe
    const alertaPrevia = formulario.querySelector('.alerta-exito');
    if (alertaPrevia) alertaPrevia.remove();

    // Crear el contenedor con clases Tailwind que coinciden con el diseño
    const alerta = document.createElement('div');
    alerta.className = 'alerta-exito bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl mb-5 flex items-start gap-3 text-sm font-medium animate-fade-in shadow-sm';
    
    alerta.innerHTML = `
      <div class="p-1 bg-emerald-100 rounded-full text-emerald-600 shrink-0 mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h5 class="font-bold text-emerald-900">${titulo}</h5>
        <p class="text-xs text-emerald-700 mt-0.5">${mensaje}</p>
      </div>
    `;

    // Insertar el banner al inicio del formulario correspondiente
    formulario.prepend(alerta);

    // Ocultar automáticamente a los 6 segundos si no hay redirección
    setTimeout(() => {
      if (alerta && alerta.parentNode) {
        alerta.remove();
      }
    }, 12000);
  }

});
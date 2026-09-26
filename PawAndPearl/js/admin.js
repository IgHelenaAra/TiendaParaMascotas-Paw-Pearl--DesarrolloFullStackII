/* Paw&Pearl Admin Panel - Interfaz y Eventos */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar iconos de Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Manejo de Confirmación al Eliminar
  initDeleteConfirmations();

  // 3. Resaltado de Navegación Activa
  highlightActiveNavLink();

  // 4. Feedback Visual y Validaciones en Formularios
  initFormFeedback();
});

/* Confirmación de eliminación en registros de tablas */
function initDeleteConfirmations() {
  const deleteButtons = document.querySelectorAll('button:has([data-lucide="trash-2"]), button.btn-delete');

  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const row = button.closest('tr');
      const itemName = row ? row.querySelector('td')?.innerText.trim().split('\n')[0] : 'este elemento';

      const confirmed = confirm(`¿Estás seguro de que deseas eliminar "${itemName}"?\nEsta acción no se puede deshacer.`);

      if (confirmed && row) {
        row.style.transition = 'all 0.3s ease';
        row.style.opacity = '0';
        row.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
          row.remove();
          showAdminNotification('Registro eliminado con éxito.', 'success');
        }, 600);
      }
    });
  });
}

/* Resalta la categoría del menú correspondiente a la página actual */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('aside nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Detecta coincidencia exacta o relaciones de submódulos (ej: productos_nuevo.html -> productos.html)
    const baseModule = currentPath.split('_')[0];
    const isRelated = href.startsWith(baseModule) && baseModule !== 'index' && baseModule !== '';

    if (href === currentPath || isRelated || (currentPath === '' && href === 'index.html')) {
      link.classList.add('bg-[#087f8c]', 'text-[#ffffff]', 'font-semibold', 'shadow-sm');
      link.classList.remove('hover:bg-white/10', 'text-gray-300');
    } else {
      link.classList.remove('bg-[#087f8c]', 'text-[#ffffff]', 'font-semibold', 'shadow-sm');
      link.classList.add('hover:bg-white/10', 'text-gray-300');
    }
  });
}

/* Toast de notificación admin */
function showAdminNotification(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-5 right-5 px-5 py-3 rounded-xl font-medium text-[#ffffff] shadow-lg flex items-center gap-3 transition-all transform translate-y-10 opacity-0 z-50 ${
    type === 'success' ? 'bg-[#087f8c]' : 'bg-red-600'
  }`;
  
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Transición de entrada
  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 15);

  // Transición de salida y remoción
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.remove(), 600);
  }, 6000);
}

/* Intercepción de eventos submit para validación y mensajes de éxito */
function initFormFeedback() {
  const forms = document.querySelectorAll('form');
  const currentPage = window.location.pathname.split('/').pop();

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validación HTML5 nativa
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Determinar mensaje de éxito según el formulario y la página actual
      let successMessage = 'Cambios guardados correctamente.';
      let targetRedirect = form.getAttribute('action') || 'index.html';

      if (currentPage.includes('productos')) {
        successMessage = currentPage.includes('nuevo') 
          ? 'Producto registrado con éxito.' 
          : 'Producto actualizado con éxito.';
      } else if (currentPage.includes('servicios')) {
        successMessage = currentPage.includes('nuevo') 
          ? 'Servicio registrado con éxito.' 
          : 'Servicio actualizado con éxito.';
      } else if (currentPage.includes('usuario')) {
        successMessage = currentPage.includes('nuevo') 
          ? 'Usuario registrado con éxito.' 
          : 'Usuario actualizado con éxito.';
      }

      // Mostrar toast de éxito y redirigir
      showAdminNotification(successMessage, 'success');

      setTimeout(() => {
        if (targetRedirect && targetRedirect !== '#') {
          window.location.href = targetRedirect;
        }
      }, 1200);
    });
  });
}
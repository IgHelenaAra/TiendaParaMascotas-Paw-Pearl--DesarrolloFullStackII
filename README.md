# TiendaParaMascotas-PawAndPearl--DesarrolloFullStackII

## Descripción
Proyecto de e-commerce y servicios de atención clínica veterinaria **Paw&Pearl**. Cuenta con un sitio público dinámico y un panel administrativo de gestión.

## Tecnologías Utilizadas
- **HTML5**: Estructuración semántica.
- **CSS / Tailwind CSS / lucide.createIcons **: Diseño responsivo adaptable (Mobile ≥ 360px, Tablet ≥ 768px, Desktop ≥ 1280px).
- **JavaScript Vanilla (ES6+)**: Persistencia con `localStorage` y dinamismo de Comunas/Regiones de Chile.


# 🐾 Paw & Pearl — Tienda para Mascotas

```text
Paw_And_Pearl.github.io/
├── 📄 index.html                  # Portada principal y servicios destacados
├── 🛍️ tienda.html                 # Catálogo de productos (alimentos, accesorios, salud)
├── 🏷️ producto_detalle.html       # Vista detallada de un producto
├── 🛒 carrito.html                # Carrito de compras
├── 🩺 servicios.html              # Lista de servicios médicos y peluquería
├── 💉 servicios_detalle.html       # Detalle de un servicio específico
├── 📰 blogs.html                  # Listado de artículos y noticias
├── 📖 blog_detalle_1.html         # Artículo de blog #1
├── 📖 blog_detalle_2.html         # Artículo de blog #2
├── 🏢 nosotros.html               # Información institucional de Paw & Pearl
├── ✉️ contacto.html               # Formulario de contacto y reservas
├── 🔑 login.html                  # Inicio de sesión de usuarios
├── 📝 registro.html               # Registro de nuevos clientes
├── 📋 mi_solicitud.html           # Seguimiento de solicitudes del usuario
├── 📘 README.md                   # Documentación del proyecto
│
├── ⚙️ admin/                      # Panel de Control Administrativo
│   ├── 📊 index.html              # Dashboard / Panel general
│   ├── 📦 productos.html          # Gestión / Listado de productos
│   ├── ➕ productos_nuevo.html    # Formulario para agregar producto
│   ├── ✏️ productos_editar.html   # Formulario para editar producto
│   ├── 🛠️ servicios.html          # Gestión / Listado de servicios
│   ├── ➕ servicios_nuevo.html    # Formulario para agregar servicio
│   ├── ✏️ servicios_editar.html   # Formulario para editar servicio
│   ├── 👥 usuarios.html           # Gestión / Listado de usuarios
│   ├── ➕ usuario_nuevo.html      # Formulario para agregar usuario
│   └── ✏️ usuario_editar.html     # Formulario para editar usuario
│
├── 🎨 activos/                    # Recursos Estáticos (Assets)
│   ├── 🎨 css/
│   │   ├── style.css              # Estilos globales de la tienda pública
│   │   └── admin.css              # Estilos exclusivos del panel administrativo
│   └── 🖼️ imagenes/              # Videos e imágenes del sitio
│
└── 📜 js/                         # Lógica Frontend (JavaScript)
    ├── main.js                    # Carrito (localStorage) y validaciones públicas
    ├── admin.js                   # Validaciones y funciones del panel admin
    └── regions-data.js            # Arreglo de Regiones y Comunas de Chile

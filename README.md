# TiendaParaMascotas-PawAndPearl--DesarrolloFullStackII
# Paw&Pearl - Veterinaria y Tienda Mascotas

## Descripción
Proyecto de e-commerce y servicios de atención clínica veterinaria **Paw&Pearl**. Cuenta con un sitio público dinámico y un panel administrativo de gestión.

## Tecnologías Utilizadas
- **HTML5**: Estructuración semántica.
- **CSS / Tailwind CSS / lucide.createIcons **: Diseño responsivo adaptable (Mobile ≥ 360px, Tablet ≥ 768px, Desktop ≥ 1280px).
- **JavaScript Vanilla (ES6+)**: Persistencia con `localStorage` y dinamismo de Comunas/Regiones de Chile.


Paw_And_Pearl.github.io/

├── index.html              # Portada principal y servicios destacados

├── producto_detalle.html   # Vista detallada de un producto

├── nosotros.html           # Información institucional de Paw&Pearl

├── servicios.html          # Detalle de servicios médicos y peluquería

├── servicio_detalle.html   # Detalle de un servicio específico

├── blogs.html              # Listado de artículos y noticias

├── blog_detalle_1.html     # Detalle de noticia 1

├── blog_detalle_2.html     # Detalle de noticia 2

├── contacto.html           # Formulario de contacto y reservas

├── login.html              # Inicio de sesión de usuarios

├── registro.html           # Registro de nuevos clientes

├── mi_solicitud.html       # Seguimiento de solicitudes del usuario

├── carrito.html            # Carrito donde van los productos

├── tienda.html             # Productos de la tienda (alimentos, accesorios, salud)

├── readme.md               # Documentación del proyecto

│

├── admin/                  # Panel de Control Interno

│   ├── index.html          # Dashboard de administración

│   ├── servicios.html      # Gestión / Listado de servicios

│   ├── servicios_nuevo.html # Crear nuevo servicio

│   ├── servicios_editar.html# Editar servicio existente

│   ├── usuarios.html       # Gestión / Listado de usuarios

│   ├── usuario_nuevo.html  # Crear nuevo usuario

│   ├── usuario_editar.html # Editar usuario existente

│   ├── productos.html      # Gestión de productos

│   ├── productos_editar.html # Editar producto

│   └── productos_nuevo.html  # Agregar nuevo producto

│

├── assets/                 # Recursos Estáticos

│   ├── css/

│   │   ├── style.css       # Estilos globales de la tienda pública

│   │   └── admin.css       # Estilos exclusivos del panel administrativo

│   └── images/             # Imágenes y logotipos del sitio

│

└── js/                     # Lógica Frontend en JavaScript

    ├── main.js             # Carrito (localStorage) y validaciones públicas
    
    ├── admin.js            # Validaciones y funciones del panel admin
    
    └── regions-data.js     # Arreglo de Regiones y Comunas de Chile

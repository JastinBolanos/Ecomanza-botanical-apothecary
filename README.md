# 🌿 ECOMANZA · Botica Botánica & Cosmética Sostenible (v1.0.0-PROD)

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-production-blue)
![Version](https://img.shields.io/badge/version-1.0.0--PROD-orange)
![Sustainability](https://img.shields.io/badge/packaging-zero_waste-success)

Plataforma de comercio electrónico y botica botánica contemporánea de ECOMANZA.  
Este sistema digital fue concebido con un enfoque artesanal y sobrio para brindar una experiencia sensorial serena, facilitando el descubrimiento de fórmulas botánicas puras, el desglose honesto de ingredientes de origen silvestre y un proceso de compra fluido, respetuoso y minimalista.

🌍 **[Ver Plataforma en Vivo (Producción) 🟢]**  
`[AQUÍ VA EL LINK DE LA PLATAFORMA EN VIVO]`

---

![Captura de Pantalla del Proyecto](https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80)
*<!-- [AQUÍ VA EL LINK DE LA CAPTURA O IMAGEN PRINCIPAL] -->*

---

## 🎥 Demostración de Experiencia y Navegación Sensorial

### 🎬 Recorrido Interactivo de la Tienda y Catálogo Botánico
Exploración de la interfaz de usuario: pantalla de bienvenida inmersiva con transición suave, catálogo con filtrado por categoría aromática, ficha técnica de producto con notas olfativas y ritual de aplicación, y cajón lateral interactivo para la gestión de la cesta de compra.

`[AQUÍ VA EL LINK DEL VIDEO O DEMOSTRACIÓN]`

---

## 🏗️ Arquitectura de Sistema y Stack Tecnológico

Este repositorio alberga la arquitectura frontend de la plataforma web, desarrollada siguiendo principios de sobriedad tipográfica, accesibilidad visual y rendimiento de carga óptimo. El desarrollo se realizó de manera disciplinada y modular, priorizando el confort visual, tiempos de respuesta instantáneos y un diseño orgánico en tonos lino y piedra.

### Core & Runtime (Edge-Optimized):
* **`react (^19.0.1)` & `react-dom`**: Renderizado declarativo con las últimas mejoras de concurrencia y gestión eficiente del ciclo de vida de componentes.
* **`typescript (~5.8.2)`**: Tipado estricto para asegurar la consistencia del catálogo, tipos de carritos, variantes de volumen e ingredientes.
* **`vite (^6.2.3)`**: Servidor de desarrollo ultrarrápido y empaquetado optimizado con división de código para producción.
* **`react-router-dom (^7.18.3)`**: Enrutamiento declarativo del lado del cliente para una navegación instantánea sin parpadeos.

### Interfaz de Usuario (UI) & Estilizado:
* **`tailwindcss (^4.1.14)`**: Sistema de utilidades CSS moderno configurado para una paleta editorial cálida, respetando proporciones matemáticas en espaciados y tipografías.
* **`motion (^12.23.24)`**: Transiciones y microinteracciones coreografiadas con sutileza (despliegue del cajón de compra, transiciones de pantalla y modales).
* **`lucide-react (^0.546.0)`**: Iconografía vectorial minimalista y estandarizada (bolsa de compra, búsqueda botánica, sellos de sostenibilidad).

### Gestión de Estado & Experiencia de Usuario:
* **`CartContext`**: Contexto React con sincronización en almacenamiento local (`localStorage`), manteniendo la cesta de la compra preservada entre sesiones de navegación.
* **`ComingSoonModalContext`**: Gestión centralizada de estados y avisos amigables de funcionalidades complementarias.
* **`@google/genai (^2.4.0)`**: Preparado para servicios de asesoramiento botánico y formulación personalizada asistida por IA.

---

## 🚀 Módulos Operativos (Desplegados)

### 🌿 Pantalla de Bienvenida & Transición Inmersiva (`WelcomeScreen`)
* Bienvenida visual con tipografía serif refinada (*Playfair / Editorial*) y mensaje inspirador de desaceleración y bienestar.
* Desvanecimiento fluido hacia el catálogo principal con memoria de sesión para no entorpecer navegaciones recurrentes.

### 🧴 Catálogo de Fórmulas Botánicas (`ProductsPage` & `ProductCard`)
* Visualización honesta de productos clasificados por familias: Cabello, Rostro, Cuerpo y Hogar.
* Filtros por necesidades capilares/cutáneas (nutrición, purificación, calma, equilibrio).
* Indicador de volumen (`ml`), notas botánicas en etiquetas minimalistas y precio visible de forma clara.

### 📖 Ficha de Producto y Ritual de Uso (`ProductDetailPage`)
* Desglose completo de activos naturales (murumuru amazónico, aceite de lino, vetiver de Haití, romero silvestre).
* Guía del ritual de aplicación paso a paso para transformar el aseo cotidiano en un hábito consciente.
* Selector de unidades y botón de adición directa a la cesta con confirmación háptica y visual.

### 🛍️ Cajón Lateral de Compra (`Sidebar` & `CartContext`)
* Carrito accesible desde cualquier vista sin romper el flujo de lectura.
* Modificación dinámica de cantidades, cálculo automático de importes e indicador visual de umbral para envío gratuito sin huella de carbono.
* Pasarela simulada de checkout preparada para integración con pasarelas de pago sostenibles (Stripe / Redsys).

### 🔍 Buscador Botánico Predictivo (`SearchBar`)
* Búsqueda en tiempo real por nombre de producto, ingredientes clave o beneficios terapéuticos.
* Acceso directo a fichas de producto con resaltado visual de coincidencias.

### 🌱 Manifiesto de Sostenibilidad & Trazabilidad (`SustainabilityPage`)
* Explicación transparente de la política de envases de vidrio ámbar reutilizables y recambios sólidos biodegradables.
* Filosofía de formulaciones libres de sulfatos agresivos, siliconas no biodegradables y fragancias sintéticas.

---

## 💻 Guía de Despliegue y Ejecución (Entorno Local)

Para desarrolladores o colaboradores que deseen ejecutar, auditar o contribuir al proyecto en un entorno local:

### 1. Clonar el repositorio y preparar el directorio
```bash
git clone [AQUÍ VA EL LINK DEL REPOSITORIO DE GITHUB]
cd ecomanza
```

### 2. Instalación de dependencias (Node.js v18+)
Instale todas las dependencias del proyecto de forma reproducible:
```bash
npm install
```

### 3. Configuración de Entorno (Environment)
Si desea habilitar integraciones externas o asistentes de recomendación botánica, clone el archivo de variables de entorno:
```bash
cp .env.example .env
```
*(Nota: Configure las claves de API necesarias dentro de `.env` según corresponda).*

### 4. Iniciar el servidor local de desarrollo
Inicie el servidor de Vite con recarga rápida y soporte de red local:
```bash
npm run dev
```
La terminal indicará la dirección local activa (por defecto `http://localhost:3000`).

### 5. Validación y Compilación para Producción (CI/CD Pipeline)
Para verificar tipos y generar los archivos optimizados listos para su distribución en CDN / Edge:
```bash
# Comprobación de tipos en TypeScript
npm run lint

# Generación del bundle de producción
npm run build
```

---

## 🤝 Reflexión y Filosofía de Construcción

> *"Construir esta plataforma fue un ejercicio de contención y respeto por los detalles. En lugar de saturar al visitante con llamadas comerciales estridentes, nos propusimos crear un refugio digital: espacios en blanco que respiran, tipografía pausada, transparencia radical en los ingredientes y un código limpio y mantenible que rinde tributo a la botica tradicional."*

---

Propiedad Intelectual de **ECOMANZA Botica Botánica** © 2026. Todos los derechos reservados.  
`[AQUÍ VA EL LINK AL SITIO WEB OFICIAL O CONTACTO]`

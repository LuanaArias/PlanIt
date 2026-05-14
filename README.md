# PlanIt 🌿

Aplicación web de gestión de tareas desarrollada con **React + Spring Boot + PostgreSQL + Firebase Authentication**.  
PlanIt permite crear, editar, completar y eliminar tareas asociadas a cada usuario autenticado.

---

# 🔗 Links

## 🌐 Frontend
Deploy realizado con Firebase Hosting:

[Ver aplicación](https://planit-b6e6f.web.app)

---

## ☕ Backend
API REST desplegada en Render:

[Ver API](https://planit-56ro.onrender.com/api/tareas)

---

# ✨ Características

## 🔐 Autenticación con Firebase
- Login con Google
- Login con Email y Contraseña
- Recuperación de contraseña

## ✅ CRUD completo de tareas
- Crear tareas
- Editar tareas
- Eliminar tareas
- Marcar tareas como completadas

## 📝 Editor de texto enriquecido (TipTap)
Las descripciones de tareas incluyen un editor avanzado construido con **TipTap**, permitiendo:

- Texto en **negrita**
- Texto *itálico*
- Texto subrayado
- Cambio de color de texto
- Cambio de fuente
- Cambio de tamaño de fuente
- Alineación izquierda, centrada y derecha
- Listas
- Inserción de imágenes
- Inserción de videos de YouTube

## 👤 Gestión por usuario
- Tareas asociadas a cada usuario autenticado
- Separación de información por cuenta

### 🎨 Diseño UI
- Estética moderna soft lavender
- Glassmorphism
- Diseño responsive
- Animaciones suaves
- Dashboard interactivo

---

# 🛠️ Tecnologías utilizadas

## Frontend
- React
- Vite
- Firebase Authentication
- CSS3

## Backend
- Java 17
- Spring Boot
- Spring Data JPA
- PostgreSQL

## Base de datos
- PostgreSQL

---

# 📂 Estructura del proyecto

```bash
PlanIt/
│
├── frontend/      # Aplicación React
│
├── backend/       # API REST Spring Boot
│
└── README.md
```

---

# 🚀 Instalación y ejecución

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/planit.git

cd planit
```

---

# ⚛️ Frontend (React)

## Entrar a la carpeta frontend

```bash
cd frontend
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar el proyecto

```bash
npm run dev
```

El frontend se ejecutará en:

```bash
http://localhost:5173
```

---

# ☕ Backend (Spring Boot)

## Entrar a la carpeta backend

```bash
cd backend
```

## Ejecutar la aplicación

```bash
./mvnw spring-boot:run
```

o desde VS Code ejecutando la clase:

```bash
PlanItApplication.java
```

El backend se ejecutará en:

```bash
http://localhost:8080
```

---

# 🚀 Deploy

## 🌐 Frontend desplegado en Firebase Hosting

El frontend fue desplegado utilizando Firebase Hosting.

### Build del frontend

```bash
npm run build
```

```bash
firebase deploy
```

## 🌐 Backend desplegado en Render

La API REST desarrollada con Spring Boot fue desplegada utilizando Render.

### Variables de entorno utilizadas

```bash
SPRING_DATASOURCE_URL=
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=
JWT_SECRET=
```

# 🐘 Configuración de PostgreSQL

Crear una base de datos llamada:

```sql
planit_db
```

Y configurar las credenciales en:

```bash
backend/src/main/resources/application.properties
```

Ejemplo:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/planit_db
spring.datasource.username=planit_user
spring.datasource.password=TU_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

# 🔥 Configuración de Firebase

Habilitar en Firebase Authentication:

- Email/Password
- Google Provider

Luego agregar tu configuración en:

```bash
frontend/src/firebase.js
```

---

# 📌 Funcionalidades

## Usuarios
- Registro con email
- Inicio de sesión
- Login con Google
- Recuperación de contraseña

## Tareas
- Crear tareas
- Editar tareas
- Eliminar tareas
- Marcar tareas como completadas

## Filtros
- Todas
- Pendientes
- Completadas

---

# 📸 Capturas
<img width="1919" height="992" alt="image" src="https://github.com/user-attachments/assets/4dcc1f4f-92f6-48bc-a3cf-7312e275ff57" />

<img width="1904" height="993" alt="image" src="https://github.com/user-attachments/assets/c1cda302-ed23-45f8-a4ca-00dbf66e0529" />
<img width="1899" height="989" alt="image" src="https://github.com/user-attachments/assets/4b409f45-cde0-477a-9a0b-3d82d97df6fa" />

<img width="1901" height="991" alt="image" src="https://github.com/user-attachments/assets/f695c12c-7f09-46e8-beae-6f951570f6f4" />
<img width="1904" height="990" alt="image" src="https://github.com/user-attachments/assets/137c3e41-0240-4fe0-b699-a3e175a3c171" />
<img width="1904" height="984" alt="image" src="https://github.com/user-attachments/assets/2adfedf5-70d3-45eb-960d-b283b75b92ca" />




---

# 👩‍💻 Autora

Desarrollado por **Luana Arias Lavia** ✨
- Frontend con React
- Backend con Java Spring Boot
- UI/UX personalizada
- Integración Firebase
- Deploy Fullstack

---

# 📄 Licencia

Este proyecto es de uso educativo y de portfolio

# PlanIt 🌿

Aplicación web de gestión de tareas desarrollada con **React + Spring Boot + PostgreSQL + Firebase Authentication**.  
PlanIt permite crear, editar, completar y eliminar tareas asociadas a cada usuario autenticado.

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

## 👤 Gestión por usuario
- Tareas asociadas a cada usuario autenticado

## 🎨 Diseño
- Interfaz moderna y minimalista
- Estética lavender / soft lilac

---

# 🛠️ Tecnologías utilizadas

## Frontend
- React
- Vite
- Firebase Authentication
- CSS3

## Backend
- Java 21
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



---

# 👩‍💻 Autora

Desarrollado por **Luana Arias Lavia** ✨

- Frontend React
- Backend Java Spring Boot
- Diseño UI personalizado

---

# 📄 Licencia

Este proyecto es de uso educativo y de portfolio
Este proyecto es de uso educativo y de portfolio.

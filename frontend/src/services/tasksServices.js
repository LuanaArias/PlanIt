import { auth } from "../firebase.js";
const API = "https://planit-56ro.onrender.com/api/tareas";

//Obtener todas las tareas
export const getTasks = async () => {
    const res = await fetch(API);
    const data = await res.json();
    const user = auth.currentUser;

    if (!user) return [];
    
    // Filtro con limpieza total
    const filtradas = data.filter(task => {
        const tId = String(task.userId || "").trim();
        const uId = String(user.uid || "").trim();
        return tId === uId;
    });

    return filtradas;
};


//Crear una tarea
export const createTask = async (task) => {
    // Obtenemos el usuario que está logueado en este momento
    const user = auth.currentUser;

    if (!user) {
        console.error("No hay un usuario autenticado para crear la tarea");
        return;
    }

    // Creamos un objeto que incluya el userId
    const taskWithUser = {
        ...task,
        userId: user ? user.uid : null, // Guardamos el usuario
        completed: task.completed || 0 // Aseguramos que tenga un estado inicial
    };

    // Enviamos el objeto modificado a tu API
    const res = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskWithUser)
    });

    const data = await res.json();
    return data;
}

//Actualizar una tarea
export const updateTask = async (id, updateTask) => {
    const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateTask)
    });

    if (!res.ok) throw new Error("Error al actualizar la tarea");

    const data = await res.json();
    return data;
}
//Eliminar una tarea
export const deleteTask = async (id) => {
    const res = await fetch(`${API}/${id}`, {
        method: "DELETE"
    });
     
    if(!res.ok) throw new Error('Error en la solicitud al eliminar una tarea')

    return true;
}
import axios from 'axios';

function getUrl() {
    return import.meta.env.VUE_APP_CURRENT
}

const axiosInstance = axios.create({
    baseURL: getUrl(), // Reemplaza con la URL base de tu API
    headers: {
        'Content-Type': 'application/json',
        // Aquí puedes añadir headers que sean comunes para todas las solicitudes
    }
});

axiosInstance.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers.Token = getToken();
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;

function getToken() {
    return localStorage.getItem('token'); // o de cualquier otra fuente
}

export async function login(user) {
    //const complemento = '/usuario/login';
    //let urlnew = getUrl() + complemento;

    // try {
    //     let respuesta = await axiosInstance.post(urlnew, user);
    //     let respuestaJson = respuesta.json
    //     return respuesta
    // } catch (error) {
    //     console.log('Error en login', error);
    //     throw error;
    // }
    return user;
}
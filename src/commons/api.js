import axios from "axios";
import md5 from "md5";

const publicKey = "5375e68c9cec998bb6eec93891716ebd";
const privateKey = "15a59116fd1c821d8b47fcffb1d2cee60d3e5836";

const axiosInstance = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  get: async (endpoint, params) => {
    try {
      params.apikey = publicKey  ;
      params.ts = new Date().getTime();
      params.hash = md5(`${params.ts}${privateKey}${publicKey}`);
      const response = await axiosInstance.get(endpoint, { params });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

const handleError = (error) => {
  // Aquí puedes manejar el error, mostrar un mensaje en la UI o lanzar excepciones
  if (error.response) {
    console.error("Error en la respuesta de la API", error.response);
  } else if (error.request) {
    console.error(
      "La solicitud fue hecha pero no hubo respuesta",
      error.request
    );
  } else {
    console.error("Error al configurar la solicitud", error.message);
  }
  throw error; // Lanzar el error para ser capturado en otra parte si es necesario
};

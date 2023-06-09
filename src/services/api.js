import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = 'https://api.mercadolibre.com';

export const searchProducts = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/sites/MLA/search?q=${query}`);
        return response.data.results;
    } catch (_err) {
        toast.error('Error al buscar productos. Por favor, inténtalo nuevamente.');
        return [];
    }
};

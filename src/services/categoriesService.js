import { API_URL } from "./api"

const urlCategories = `${API_URL}/categorias`;
    
export async function getCategories() {
    const response = await fetch(urlCategories);

    return response.json()
}
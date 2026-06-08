import { API_URL } from './api'

const urlProducts = `${API_URL}/produtos`

export async function getProducts(){
    const response = await fetch(urlProducts);

    return response.json()
}

export async function createProducts(product){
    await fetch(urlProducts, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(product)
    })
}

export async function updateProducts(){

}

export async function deleteProducts(){

}
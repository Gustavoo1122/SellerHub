import { API_URL } from './api'

const urlProducts = `${API_URL}/produtos`

export async function getProducts(){
    const response = await fetch(urlProducts);

    return response.json()
}

export async function getProduct(id){
    const response = await fetch(`${urlProducts}/${id}`);

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

export async function updateProducts(id, product){
    await fetch (`${urlProducts}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
}

export async function deleteProducts(id){
    await fetch(`${urlProducts}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
}
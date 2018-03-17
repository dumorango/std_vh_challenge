import axios from 'axios';

const storeUrl = 'Store'

export async function getAllProducts(store) {
    const result = await axios.get(`${storeUrl}/${store.id}/products`);
    return result.data;
}

export async function getAllStores() {
    const result = await axios.get(storeUrl);
    return result.data;
}

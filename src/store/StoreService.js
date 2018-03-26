import axios from 'axios';

const storeUrl = '/Store';

export async function getAllProducts(storeId) {
    const result = await axios.get(`${storeUrl}/${storeId}/products`);
    return result.data;
}

export async function getAllStores() {
    const result = await axios.get(storeUrl);
    return result.data;
}

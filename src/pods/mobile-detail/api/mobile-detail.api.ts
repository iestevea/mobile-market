import { MobileApi } from "./mobile-detail.api-model";

const baseUrl = 'https://front-test-api.herokuapp.com'

export const fetchMobileDetail = async (id: number): Promise<MobileApi> => {
  return fetch(`${baseUrl}/api/product/${id}`)
    .then((response) => response.json())
    .then((json) => json);
}

export const addMobileToCart = async (id: string, color: string, storage: string): Promise<{ count: number }> => {
  return fetch(`${baseUrl}/api/cart`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      colorCode: color,
      storageCode: storage
    })
  })
    .then((response) => response.json())
    .then((json) => json);
}
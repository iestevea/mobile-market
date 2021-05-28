import { MobileApi } from "./mobile-detail.api-model";

const baseUrl = 'https://front-test-api.herokuapp.com'

export const fetchMobileDetail = async (id: number): Promise<MobileApi> => {
  return fetch(`${baseUrl}/api/product/${id}`)
    .then((response) => response.json())
    .then((json) => json);
}
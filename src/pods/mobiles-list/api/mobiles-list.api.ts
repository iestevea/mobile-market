import { MobileApi } from "./mobiles-list.api-model";

const baseUrl = 'https://front-test-api.herokuapp.com'

export const fetchMobilesList = async (): Promise<MobileApi[]> => {
  return fetch(`${baseUrl}/api/product`)
    .then((response) => response.json())
    .then((json) => json);
};

export const filterMobilesList = async (filter: string): Promise<MobileApi[]> => {
  const mobiles = await fetchMobilesList();
  return mobiles.filter((mobile: MobileApi) =>
    mobile.brand.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
    mobile.model.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  )

};
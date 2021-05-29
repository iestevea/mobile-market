export interface MobileVm {
  id: string;
  imgUrl: string;
  brand: string;
  model: string;
  price: number;
  cpu: string;
  ram: string;
  os: string;
  displayResolution: string;
  battery: string;
  cameras: string[];
  weight: string;
}

export const createEmptyMobile = (): MobileVm => ({
  id: '',
  imgUrl: '',
  brand: '',
  model: '',
  price: 0,
  cpu: '',
  ram: '',
  os: '',
  displayResolution: '',
  battery: '',
  cameras: [],
  weight: '',
})
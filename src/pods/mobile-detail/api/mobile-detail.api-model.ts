export interface MobileApi {
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
  primaryCamera: string[];
  secondaryCmera: string; // API
  weight: string;
}
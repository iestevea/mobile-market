export const COLOR_OPTIONS: Option[] = [
  { value: '', label: 'Seleccione' },
  { value: 'red', label: 'Rojo' },
  { value: 'black', label: 'Negro' },
  { value: 'blue', label: 'Azul' },
  { value: 'white', label: 'Blanco' },
]

export const STORAGE_OPTIONS: Option[] = [
  { value: '', label: 'Seleccione' },
  { value: '64', label: '64MB' },
  { value: '128', label: '128MB' },
  { value: '256', label: '256MB' },
]

export interface Option {
  value: string;
  label: string;
}
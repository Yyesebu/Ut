export enum Brand {
  ALL = 'All',
  SAMSUNG = 'Samsung',
  VIVO = 'Vivo',
  OPPO = 'OPPO',
  REALME = 'Realme',
  XIAOMI = 'Xiaomi',
  POCO = 'POCO',
  ONEPLUS = 'OnePlus',
  MOTOROLA = 'Motorola',
  INFINIX = 'Infinix',
  TECNO = 'Tecno',
  GOOGLE = 'Google',
  IQOO = 'iQOO',
  NOTHING = 'Nothing',
  ASUS = 'Asus',
  HONOR = 'Honor',
  LAVA = 'Lava',
  ITEL = 'Itel',
}

export enum Status {
  AVAILABLE = 'Available',
  SERVER_DOWN = 'Server Down',
  DELAYED = 'Delayed',
}

export interface ServiceItem {
  id: string;
  model: string;
  brand: Brand;
  serviceName: string;
  price: number;
  status: Status;
}
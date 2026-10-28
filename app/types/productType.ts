export type productType = {
  file: string;

  id: string;
  name: string;
  discount: number;
  description: string;
  src: string;
  price: number;
  ram: number;
  width: number;
  height: number;
  size: number;
  drive: string;
  rate: number;
  category: string;
  brand: string;
  touchScreen: boolean;
  fingerPrint: boolean;
  faceId: boolean;
  waranty: string;
};
export type topPicksType = {
  id: string;
  title: string;
  description: string;
  src: string;
  price: number;
  ram: number;
  width: number;
  height: number;
  size: number;
  drive: string;
  rate: number;
  category: string;
  brand: string;
  touchScreeen: boolean;
  fingerPrint: boolean;
  faceId: boolean;
  waranty: string;
}[];

export type showCartT = {
  id: string;
  src: string;
  title: string;
  price: number;
  quantity: number;
};

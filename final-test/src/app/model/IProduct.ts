import {IProductType} from "./IProductType";

export interface IProduct {
  id: number;
  nameProduct: string;
  typeProduct: IProductType;
  price: number;
}

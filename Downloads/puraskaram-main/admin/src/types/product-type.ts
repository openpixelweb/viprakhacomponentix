export interface ICategoryItem {
  name: string;
  id: string;
}

export interface IProduct {
  _id: string;
  sku: string;
  title: string;
  parent: string;
  tags: string[];
  image: string;
  originalPrice: number;
  price: number;
  discount?: number;
  relatedImages: string[];
  description: string;
  orderQuantity: number;
  brand: {
    name: string;
    id: string;
  };
  categories: ICategoryItem[];
  unit: string;
  quantity: number;
  type?: string;
  itemInfo?: string;
  status: string;
}

export interface ProductResponse {
  success: boolean;
  data: IProduct[];
}

export interface IAddProduct {
  sku: string;
  title: string;
  parent: string;
  tags: string[];
  image: string;
  originalPrice: number;
  price: number;
  discount?: number;
  relatedImages: string[];
  description: string;
  brand: {
    name: string;
    id: string;
  };
  categories: ICategoryItem[];
  unit: string;
  quantity: number;
  type?: string;
  itemInfo?: string;
  status?: string;
}
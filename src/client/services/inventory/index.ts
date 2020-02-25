import { ProductResponse } from '../../../server/features/Inventory/Product/types';


const formatProductsData = (products: ProductResponse[]) => products.map((product) => ({
  ...product,
  price: `$ ${product.price}`,
  dateCreated: product.dateCreated ? new Date(product.dateCreated).toLocaleDateString() : 'N/A',
}));

export const getProductsRows = (products: ProductResponse[]): (string|number)[][] => formatProductsData(products)
  .map((product, i) => [i + 1, product.name, product.price, product.dateCreated]);

import { ProductResponse } from '../../../../src/server/services/Inventory/Product/types';


const formatProductsData = (products: ProductResponse[]) => products.map((product) => ({
  ...product,
  price: `$ ${product.price}`,
  dateCreated: product.dateCreated ? new Date(product.dateCreated).toLocaleDateString() : 'N/A',
}));

/**
 * Compose values for a row in the table.
 */
export const getProductsRows = (
  products: ProductResponse[], currentPage: string,
): (string|number
  )[][] => formatProductsData(products)
  .map((product, i) => [
    ((Number(currentPage) - 1) * 25) + i + 1, // item position
    product.name,
    product.price,
    product.dateCreated,
  ]);

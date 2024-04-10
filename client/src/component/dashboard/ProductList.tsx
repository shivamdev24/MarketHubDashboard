import React from "react";

interface Product {
  sr: number;
  productName: string;
  stockAvailable: number;
  soldProduct: number;
  totalSale: number;
  actualPrice: number;
}

const generateProductSales = (numProducts: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < numProducts; i++) {
    // Generate a random product name
    const productName = Array.from(
      { length: Math.floor(Math.random() * 8) + 5 },
      () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    ).join("");

    // Generate random data for other fields
    const stockAvailable = Math.floor(Math.random() * 100) + 1;
    const soldProduct = Math.floor(Math.random() * stockAvailable) + 1;
    const actualPrice = Math.floor(Math.random() * 9001) + 1000; // Random number between 1000 and 10000
    const totalSale = actualPrice * soldProduct;

    products.push({
      sr: i + 1,
      productName: productName.charAt(0).toUpperCase() + productName.slice(1),
      stockAvailable,
      soldProduct,
      totalSale,
      actualPrice,
    });
  }
  return products;
};

const ProductList: React.FC = () => {
  const randomProducts = generateProductSales(20);

  return (
    <div>
      <h2 className="text-4xl font-bold text-indigo-500 pb-4">Random Product Sales</h2>
      <table  className="w-full">
        <thead>
          <tr className="bg-indigo-100">
            <th className="text-center p-1 border text-blue-700">SR</th>
            <th className="text-center p-1 border text-blue-700">Product Name</th>
            <th className="text-center p-1 border text-blue-700">Stock Available</th>
            <th className="text-center p-1 border text-blue-700">Sold Product</th>
            <th className="text-center p-1 border text-blue-700">Total Sale</th>
            <th className="text-center p-1 border text-blue-700">Actual Price</th>
          </tr>
        </thead>
        <tbody>
          {randomProducts.map((product) => (
            <tr key={product.sr}>
              <td className="text-center p-1 border text-blue-700">{product.sr}</td>
              <td className="text-center p-1 border text-blue-700">{product.productName}</td>
              <td className="text-center p-1 border text-blue-700">{product.stockAvailable}</td>
              <td className="text-center p-1 border text-blue-700">{product.soldProduct}</td>
              <td className="text-center p-1 border text-blue-700">{product.totalSale}</td>
              <td className="text-center p-1 border text-blue-700">{product.actualPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

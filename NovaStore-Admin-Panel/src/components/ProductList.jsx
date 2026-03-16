import React from 'react';
import ProductTable from './ProductTable.jsx';

// Ürün tablosunu başlıkla birlikte saran liste bileşeni.
function ProductList({ products, onEditProduct, onDeleteProduct }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Ürün Listesi</h2>
      <ProductTable products={products} onEdit={onEditProduct} onDelete={onDeleteProduct} />
    </div>
  );
}

export default ProductList;


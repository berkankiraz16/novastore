import React from 'react';

// Ürünleri tablo halinde listeleyen ve düzenle/sil aksiyonlarını gösteren bileşen.
function ProductTable({ products, onEdit, onDelete }) {
  if (!products || products.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <p className="text-sm text-gray-600">
          Henüz ürün yok. Başlamak için yeni bir ürün ekleyin.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Ürün Adı</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Kategori</th>
              <th className="px-4 py-2 text-right font-medium text-gray-600">Fiyat</th>
              <th className="px-4 py-2 text-right font-medium text-gray-600">Stok</th>
              <th className="px-4 py-2 text-right font-medium text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => {
              const isLowStock = product.stock < 20;

              return (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-900">{product.productName}</td>
                  <td className="px-4 py-2 text-gray-700">{product.category}</td>
                  <td className="px-4 py-2 text-right text-gray-900">
                    {product.price.toLocaleString('tr-TR', {
                      style: 'currency',
                      currency: 'TRY'
                    })}
                  </td>
                  <td className="px-4 py-2 text-right">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        isLowStock
                          ? 'bg-red-50 text-red-700'
                          : 'bg-green-50 text-green-700'
                      }`}
                    >
                      {product.stock}
                      {isLowStock && <span className="ml-1">Düşük</span>}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-right space-x-2">
                    <button
                      onClick={() => onEdit(product)}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => onDelete(product.id)}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 hover:bg-red-100"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;


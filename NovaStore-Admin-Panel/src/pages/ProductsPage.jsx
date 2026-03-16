import React from 'react';
import ProductForm from '../components/ProductForm.jsx';
import ProductList from '../components/ProductList.jsx';

// Ürünler sayfası; form ve liste bileşenlerini bir araya getirir.
function ProductsPage({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  editingProduct,
  setEditingProduct
}) {
  // Formdan gelen veriye göre ekleme veya güncelleme yapar.
  function handleSubmit(productData) {
    if (productData.id) {
      onUpdateProduct(productData);
    } else {
      onAddProduct(productData);
    }
  }

  // Listeden gelen ürünü düzenleme moduna alır ve sayfanın başına kaydırır.
  function handleEdit(product) {
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Düzenleme işlemini iptal eder ve formu sıfırlar.
  function handleCancelEdit() {
    setEditingProduct(null);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Ürünler</h1>
      <p className="text-sm text-gray-600 mb-6">
        Aşağıdaki form ve tabloyu kullanarak ürün listenizi yönetebilirsiniz.
      </p>

      <ProductForm
        onSubmit={handleSubmit}
        editingProduct={editingProduct}
        onCancelEdit={handleCancelEdit}
      />

      <ProductList
        products={products}
        onEditProduct={handleEdit}
        onDeleteProduct={onDeleteProduct}
      />
    </div>
  );
}

export default ProductsPage;


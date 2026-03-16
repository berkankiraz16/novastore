import React, { useEffect, useState } from 'react';
import { PRODUCT_CATEGORIES } from '../interfaces/product.js';

// Form alanlarının başlangıç (boş) hali.
const emptyForm = {
  id: '',
  productName: '',
  price: '',
  stock: '',
  category: PRODUCT_CATEGORIES[0]
};

// Ürün ekleme/güncelleme formu bileşeni.
function ProductForm({ onSubmit, editingProduct, onCancelEdit }) {
  const [formData, setFormData] = useState(emptyForm);

  // editingProduct değiştiğinde formu ilgili ürün verileriyle doldurur veya sıfırlar.
  useEffect(() => {
    if (editingProduct) {
      setFormData({
        id: editingProduct.id,
        productName: editingProduct.productName,
        price: editingProduct.price.toString(),
        stock: editingProduct.stock.toString(),
        category: editingProduct.category
      });
    } else {
      setFormData(emptyForm);
    }
  }, [editingProduct]);

  // Input değişikliklerini form state'ine yazar.
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // Form gönderildiğinde validasyon yapar ve üst bileşene ürün verisini iletir.
  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.productName.trim()) {
      alert('Lütfen ürün adı girin.');
      return;
    }

    const priceNumber = Number(formData.price);
    const stockNumber = Number(formData.stock);

    if (Number.isNaN(priceNumber) || priceNumber < 0) {
      alert('Lütfen geçerli bir fiyat girin.');
      return;
    }

    if (!Number.isInteger(stockNumber) || stockNumber < 0) {
      alert('Lütfen geçerli bir stok miktarı girin (tam sayı).');
      return;
    }

    const productData = {
      id: formData.id,
      productName: formData.productName.trim(),
      price: priceNumber,
      stock: stockNumber,
      category: formData.category
    };

    onSubmit(productData);
    setFormData(emptyForm);
  }

  const isEditing = Boolean(editingProduct);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {isEditing ? 'Ürünü Güncelle' : 'Yeni Ürün Ekle'}
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Ürün Adı</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Ürün adını girin"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Fiyat</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="0"
            min="0"
            step="0.01"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Stok</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="0"
            min="0"
            step="1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
          >
            {PRODUCT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2 sm:col-span-2 mt-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            {isEditing ? 'Değişiklikleri Kaydet' : 'Ürün Ekle'}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              İptal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ProductForm;


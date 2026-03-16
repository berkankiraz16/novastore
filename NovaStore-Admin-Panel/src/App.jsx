import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import CustomersPage from './pages/CustomersPage.jsx';

// Ürün verilerini localStorage içinde saklamak için kullanılacak anahtar.
const LOCAL_STORAGE_KEY = 'novastore_products';

// Uygulama ilk açıldığında gösterilecek örnek ürün listesi.
const INITIAL_PRODUCTS = [
  {
    id: 'p-1',
    productName: 'Kablosuz Kulaklık',
    price: 599,
    stock: 35,
    category: 'Elektronik'
  },
  {
    id: 'p-2',
    productName: 'Kot Pantolon',
    price: 249,
    stock: 12,
    category: 'Giyim'
  },
  {
    id: 'p-3',
    productName: 'Roman Kitabı',
    price: 89,
    stock: 50,
    category: 'Kitap'
  }
];

// Uygulamanın ana bileşeni; sayfa geçişlerini ve ürün CRUD akışını yönetir.
function App() {
  // Navbar üzerinden aktif sayfayı tutan state.
  const [currentPage, setCurrentPage] = useState('dashboard');
  // Tüm ürünlerin tutulduğu ana state.
  const [products, setProducts] = useState([]);
  // Düzenleme modundaki (edit edilen) ürünü temsil eder.
  const [editingProduct, setEditingProduct] = useState(null);

  // İlk yüklemede localStorage'dan ürünleri okur, yoksa örnek ürünleri kaydeder.
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setProducts(parsed);
          return;
        }
      } catch {
      }
    }

    setProducts(INITIAL_PRODUCTS);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
  }, []);

  // Ürün listesi her değiştiğinde güncel halini localStorage içine yazar.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  // Yeni ürün ekleme fonksiyonu (Create).
  function addProduct(newProductData) {
    const newProduct = {
      ...newProductData,
      id: crypto.randomUUID()
    };
    setProducts((prev) => [...prev, newProduct]);
  }

  // Mevcut ürünü güncelleme fonksiyonu (Update).
  function updateProduct(updatedProduct) {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  }

  // Ürün silme fonksiyonu (Delete) – işlem öncesi kullanıcıdan onay alır.
  function deleteProduct(productId) {
    const confirmDelete = window.confirm('Bu ürünü silmek istediğinize emin misiniz?');
    if (!confirmDelete) return;

    setProducts((prev) => prev.filter((p) => p.id !== productId));

    if (editingProduct && editingProduct.id === productId) {
      setEditingProduct(null);
    }
  }

  // Aktif sayfaya göre hangi sayfa bileşeninin gösterileceğini belirler.
  function renderPage() {
    if (currentPage === 'dashboard') {
      return <DashboardPage products={products} />;
    }

    if (currentPage === 'products') {
      return (
        <ProductsPage
          products={products}
          onAddProduct={addProduct}
          onUpdateProduct={updateProduct}
          onDeleteProduct={deleteProduct}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
        />
      );
    }

    if (currentPage === 'orders') {
      return <OrdersPage />;
    }

    if (currentPage === 'customers') {
      return <CustomersPage />;
    }

    return <DashboardPage products={products} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onChangePage={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 text-xs text-gray-500 flex flex-wrap items-center justify-between">
          <span>NovaStore Admin Panel &copy; {new Date().getFullYear()}</span>
          <span>Berkan Kiraz Web Developer</span>
        </div>
      </footer>
    </div>
  );
}

export default App;


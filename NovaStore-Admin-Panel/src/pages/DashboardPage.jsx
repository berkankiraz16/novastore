import React from 'react';
import SummaryCard from '../components/SummaryCard.jsx';

// Dashboard sayfası; ürünler için özet istatistik kartlarını gösterir.
function DashboardPage({ products }) {
  const totalProducts = products.length;
  const lowStockCount = products.filter((p) => p.stock < 20).length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-sm text-gray-600 mb-6">
        Ürünlerin stoklarını görüntüleyebildiğiniz admin panel
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          title="Toplam Ürün"
          value={totalProducts}
          helperText="Sistemde kayıtlı toplam ürün sayısı."
        />
        <SummaryCard
          title="Düşük Stoklu Ürünler"
          value={lowStockCount}
          accentColor="bg-red-500"
          helperText="Stok miktarı 20 adedin altında olan ürünler."
        />
        <SummaryCard
          title="Veri Depolama"
          value="localStorage"
          accentColor="bg-emerald-500"
          helperText="database yok, veriler tarayıcıda saklanır.  "
        />
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Nasıl Çalışır?</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>İlk açılışta örnek birkaç ürün localStorage içine kaydedilir.</li>
          <li>Yeni ürün ekleyebilir, mevcut ürünleri güncelleyebilir veya silebilirsiniz.</li>
          <li>Dashboard üzerindeki sayılar ürün listesine göre otomatik güncellenir.</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;


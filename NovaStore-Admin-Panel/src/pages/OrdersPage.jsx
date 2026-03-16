import React from 'react';

// Mock (sahte) sipariş verilerini tablo halinde gösteren sayfa.
const MOCK_ORDERS = [
  {
    id: 'ORD-1001',
    customerName: 'Ali Yılmaz',
    totalAmount: 450,
    status: 'Tamamlandı',
    date: '2026-03-10'
  },
  {
    id: 'ORD-1002',
    customerName: 'Ayşe Demir',
    totalAmount: 120,
    status: 'Bekliyor',
    date: '2026-03-11'
  },
  {
    id: 'ORD-1003',
    customerName: 'Mehmet Kaya',
    totalAmount: 980,
    status: 'İptal',
    date: '2026-03-12'
  }
];

function OrdersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Siparişler</h1>
      <p className="text-sm text-gray-600 mb-6">
        Bu sayfa basit mock (sahte) verilerle hazırlanmış sipariş listesini gösterir. Gerçek
        backend veya ödeme sistemi yoktur.
      </p>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Sipariş ID</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Müşteri</th>
                <th className="px-4 py-2 text-right font-medium text-gray-600">Tutar</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Durum</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Tarih</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-900">{order.id}</td>
                  <td className="px-4 py-2 text-gray-700">{order.customerName}</td>
                  <td className="px-4 py-2 text-right text-gray-900">
                    {order.totalAmount.toLocaleString('tr-TR', {
                      style: 'currency',
                      currency: 'TRY'
                    })}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Tamamlandı'
                          ? 'bg-emerald-50 text-emerald-700'
                          : order.status === 'Bekliyor'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-gray-700">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;


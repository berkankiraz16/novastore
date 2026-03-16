import React from 'react';

// Mock (sahte) müşteri verilerini tablo halinde gösteren sayfa.
const MOCK_CUSTOMERS = [
  {
    id: 'C-001',
    name: 'Ali Yılmaz',
    email: 'ali@example.com',
    totalOrders: 5,
    totalSpent: 3200
  },
  {
    id: 'C-002',
    name: 'Ayşe Demir',
    email: 'ayse@example.com',
    totalOrders: 3,
    totalSpent: 1550
  },
  {
    id: 'C-003',
    name: 'Mehmet Kaya',
    email: 'mehmet@example.com',
    totalOrders: 7,
    totalSpent: 4800
  }
];

function CustomersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Müşteriler</h1>
      <p className="text-sm text-gray-600 mb-6">
        Bu sayfa basit mock (sahte) verilerle hazırlanmış müşteri listesini gösterir.
      </p>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Müşteri ID</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Ad Soyad</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">E-posta</th>
                <th className="px-4 py-2 text-right font-medium text-gray-600">Sipariş Sayısı</th>
                <th className="px-4 py-2 text-right font-medium text-gray-600">Toplam Harcama</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_CUSTOMERS.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-900">{customer.id}</td>
                  <td className="px-4 py-2 text-gray-700">{customer.name}</td>
                  <td className="px-4 py-2 text-gray-700">{customer.email}</td>
                  <td className="px-4 py-2 text-right text-gray-900">
                    {customer.totalOrders}
                  </td>
                  <td className="px-4 py-2 text-right text-gray-900">
                    {customer.totalSpent.toLocaleString('tr-TR', {
                      style: 'currency',
                      currency: 'TRY'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomersPage;


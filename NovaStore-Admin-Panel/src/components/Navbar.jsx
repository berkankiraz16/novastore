import React from 'react';

// Sayfalar arasında gezinti sağlayan üst navigasyon bar bileşeni.
function Navbar({ currentPage, onChangePage }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders' },
    { id: 'customers', label: 'Customers' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-bold">
            N
          </div>
          <span className="font-semibold text-lg text-gray-900">
            NovaStore Admin Panel
          </span>
        </div>
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangePage(item.id)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


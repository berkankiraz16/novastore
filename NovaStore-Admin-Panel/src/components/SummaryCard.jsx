import React from 'react';

// Küçük bir başlık, değer ve açıklama metni gösteren özet kart bileşeni.
function SummaryCard({ title, value, accentColor = 'bg-primary-500', helperText }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
        {helperText && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
      </div>
      <div className={`h-10 w-10 rounded-full ${accentColor} bg-opacity-10 flex items-center justify-center`}>
        <div className={`h-5 w-5 rounded-full ${accentColor}`}></div>
      </div>
    </div>
  );
}

export default SummaryCard;


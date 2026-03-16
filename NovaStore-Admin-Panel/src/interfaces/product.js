// Product model description for the NovaStore Admin Panel.
// This file is only for documentation and to keep the structure clear.
//
// A product looks like this:
//
// {
//   id: string,          // unique id (generated)
//   productName: string, // product name
//   price: number,       // price in basic currency unit
//   stock: number,       // stock quantity
//   category: string     // one of the allowed category names
// }
//
// Suggested categories:
// - "Elektronik"
// - "Giyim"
// - "Kitap"
// - "Kozmetik"
// - "Ev ve Yaşam"
//
// You can import this array of categories in your components if needed.

export const PRODUCT_CATEGORIES = [
  'Elektronik',
  'Giyim',
  'Kitap',
  'Kozmetik',
  'Ev ve Yaşam'
];


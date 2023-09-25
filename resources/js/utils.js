// invoiceUtils.js

import { usePage } from '@inertiajs/react';

const getIdSales=()=> {
  const { props } = usePage();
  return props.id_sales.id;
}

const  generateInvoiceNumber=()=> {
  const id_sales = getIdSales();
  const currentYear = new Date().getFullYear();
  const paddedId = String(id_sales.id).padStart(4, '0');
  return `INV/${currentYear}/${paddedId}`;
}

export { generateInvoiceNumber, getIdSales };
import { json2csv } from 'json2csv';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

export const jsonToCsv = (data) => {
  const csv = json2csv({ data });
  return csv;
};

export const jsonToPdf = (data) => {
  const doc = new jsPDF();
  const text = JSON.stringify(data);
  doc.text(text, 10, 10);
  return doc.output('blob');
};

export const jsonToXlsx = (data) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  return blob;
};

export default { jsonToCsv, jsonToPdf, jsonToXlsx };
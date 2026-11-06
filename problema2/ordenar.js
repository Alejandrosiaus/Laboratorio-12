const ordenarPorKey = (lista, key) =>
  [...lista].sort((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0));

const lista = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' }
];

const key = process.argv[2] || 'model';

console.log('Lista original:');
console.log(lista);
console.log(`\nLista ordenada por key = '${key}':`);
console.log(ordenarPorKey(lista, key));

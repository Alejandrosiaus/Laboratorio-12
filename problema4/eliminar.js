const eliminar = (lista, borrar) => lista.filter(e => !borrar.includes(e));

const lista = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const borrar = ['amarillo', 'cafe', 'blanco'];

const mostrar = x => console.log('[' + x.map(e => `'${e}'`).join(', ') + ']');

console.log('Lista inicial:');
mostrar(lista);
console.log('\nElementos a borrar:');
mostrar(borrar);
console.log('\nLista resultante:');
mostrar(eliminar(lista, borrar));

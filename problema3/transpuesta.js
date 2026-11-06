const transpuesta = X =>
  X.length === 0 ? [] : X[0].map((_, j) => X.map(fila => fila[j]));

const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log('X =');
console.log(X);
console.log('\nX^T =');
console.log(transpuesta(X));

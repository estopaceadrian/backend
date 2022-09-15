const Dragon = require('./dragon');

const fooey = new Dragon({
  nickname: 'fooey',
  birthdate: new Date(),
});
const baloo = new Dragon({
  birthdate: new Date(),
  nickname: 'baloo',
});

setTimeout(() => {
  const tiffa = new Dragon();
  console.log('tiffa', tiffa);
}, 3000);

console.log('fooey', fooey);
console.log('baloo', baloo);

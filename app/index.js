const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon.js');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

engine.start();

setTimeout(() => {
  engine.stop();
}, 20000);

module.exports = app;

// const Generation = require('./generation');

// const generation = new Generation();

// console.log('generation', generation);

// const gooby = generation.newDragon();

// console.log('gooby', gooby);

// setTimeout(() => {
//   const mimar = generation.newDragon();
//   console.log('mimar', mimar);
// }, 14000);

// const Dragon = require('./dragon');

// const fooey = new Dragon({
//   nickname: 'fooey',
//   birthdate: new Date(),
// });
// const baloo = new Dragon({
//   birthdate: new Date(),
//   nickname: 'baloo',
//   traits: [{ traitType: 'backgroundColor', traitValue: 'noOne' }],
// });

// console.log('fooey', fooey);
// console.log('baloo', baloo);

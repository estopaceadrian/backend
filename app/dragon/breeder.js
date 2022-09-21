const base64 = require('base-64');
const Dragon = require('./index');

class Breeder {
  static breedDragon({ matron, patron }) {
    const matronTraits = matron.traits;
    const patronTraits = patron.traits;

    const babyTraits = [];

    matronTraits.forEach(({ traitType, traitValue }) => {
      const matronTrait = traitValue;

      const patronTrait = patronTraits.find(
        (trait) => trait.traitType === traitType
      ).traitValue;

      babyTraits.push({
        traitType,
        traitValue: Breeder.pickTrait({ matronTrait, patronTrait }),
      });
    });
    return new Dragon({ nickname: 'Unnamed baby', traits: babyTraits });
  }

  //Two incoming traits: matrontrait and patrontrait
  //the matrontrait and patrontrait string values are encoded
  //both traits have their characters summed.
  //get a range by adding both character sums
  //generate a rundom number, in that range
  //if the number is lessthant the matro's charaacter sum, piuck matron
  //else pickpatron
  static pickTrait({ matronTrait, patronTrait }) {
    if (matronTrait === patronTrait) return matronTrait;

    const matronTraitCharSum = Breeder.charSum(base64.encode(matronTrait));
    const patronTraitCharSum = Breeder.charSum(base64.encode(patronTrait));

    const randomNum = Math.floor(
      Math.random() * (matronTraitCharSum + patronTraitCharSum)
    );

    return randomNum < matronTraitCharSum ? matronTrait : patronTrait;
  }

  static charSum(string) {
    string
      .split('')
      .reduce((sum, character) => (sum += character.charCodeAt()), 0);
  }
}

// const fooby = new Dragon();
// const droobe = new Dragon();

// console.log('fooby', fooby);
// console.log('droobe', droobe);
// const foogooby = Breeder.breedDragon({ matron: fooby, patron: droobe });
// console.log('fogooby', foogooby);

module.exports = Breeder;

const pool = require('../../databasePool');

class AccountDragonTable {
  static storeAccountDragon({ accountId, dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO accountDragon("accountId", "dragonId") VALUES($1, $2)`,

        [accountId, dragonId],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  static getAccountDragons({ accountId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT "dragonId" FROM accountDragon WHERE "accountId" = $1`,
        [accountId],
        (error, response) => {
          if (error) return reject(error);

          resolve({ accountDragons: response.rows });
        }
      );
    });
  }

  static getDragonAccount({ dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT "accountId" FROM accountDragon WHERE "dragonId" = $1`,
        [dragonId],
        (error, response) => {
          if (error) return reject(error);

          resolve({ accountId: response.rows[0].accountId });
        }
      );
    });
  }

  static updateDragonAccount({ dragonId, accountId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE dragonAccount SET "accountId" = $1 WHERE "dragonId" = $2`,
        [accountId, dragonId],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

// AccountDragonTable.getDragonAccount({ dragonId: 1 })
//   .then(({ accountId }) => console.log('accountId', accountId))
//   .catch((error) => console.error('error', error));

// AccountDragonTable.getDragonAccount({ dragonId: 2, accountId: 99 })
//   .then(() => console.log('success'))
//   .catch((error) => console.error('error', error));

// AccountDragonTable.getAccountDragons({ accountId: 1 })
//   .then(({ accountDragons }) => console.log('accountDragons', accountDragons))
//   .catch((error) => console.log('error', error));

// AccountDragonTable.storeAccountDragon({
//   accountId: 1,
//   dragonId: 3,
// })
//   .then(() => console.log('stored account dragon'))
//   .catch((error) => console.error('error', error));

module.exports = AccountDragonTable;

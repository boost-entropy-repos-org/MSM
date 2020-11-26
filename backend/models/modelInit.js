const Customer = require('./Customer');
const Party = require('./Party');
const Sale = require('./Sale');
const Purchase = require('./Purchase');

Customer.hasMany(Sale, { foreignKey: 'cust_id' });
Sale.belongsTo(Customer, { foreignKey: 'cust_id' });

Party.hasMany(Purchase, { foreignKey: 'party_id' });
Purchase.belongsTo(Party, { foreignKey: 'party_id' });

Customer.sync({ alter: true });
Party.sync({ alter: true });
Sale.sync({ alter: true });
Purchase.sync({ alter: true });
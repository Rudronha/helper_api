const config  = require('./config');
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql'
});
const fun = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connected');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
fun();

module.exports = sequelize;


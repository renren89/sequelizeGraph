import Sequelize from 'sequelize';

const database = 'postgres';
const username = 'postgres';
const password = 'postgres';
const config = {
  host: 'localhost',
  dialect: 'postgres',
};

const Db = new Sequelize(database, username, password, config);

export default Db;
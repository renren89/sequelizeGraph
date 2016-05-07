import Sequelize, {
  STRING,
  INTEGER
} from 'sequelize';
import Db from '../Db';

const User = Db.define('user', {
  firstName: {
    type: STRING,
    field: 'first_name'
  },
  lastName: {
    type: STRING,
  }
})

User.sync({ foce: true }).then(() => {
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  })
})

export default User;
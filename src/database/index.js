import Sequelize from 'sequelize'
import dbConfig from '../config/database'

import Users from '../models/Users'
import Random from '../models/Random'
import RandomValues from '../models/RandomValues'

const connection = new Sequelize(dbConfig)

Users.init(connection)
Random.init(connection)
RandomValues.init(connection)

Random.associate(connection.models)
RandomValues.associate(connection.models)

export default connection

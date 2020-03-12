import { Model, DataTypes } from 'sequelize'

class Random extends Model {
  static init (sequelize) {
    super.init({
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.hasMany(models.RandomValues, { foreignKey: 'random_id', as: 'random_values' })
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Random

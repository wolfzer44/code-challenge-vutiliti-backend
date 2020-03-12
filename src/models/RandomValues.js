import { Model, DataTypes } from 'sequelize'

class RandomValues extends Model {
  static init (sequelize) {
    super.init({
      value: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.Random, { foreignKey: 'id', as: 'randoms' })
  }
}

export default RandomValues

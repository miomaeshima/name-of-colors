'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class japanese_color_names extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  japanese_color_names.init({
    name: DataTypes.TEXT,
    r: DataTypes.INTEGER,
    g: DataTypes.INTEGER,
    b: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'japanese_color_names',
  });
  return japanese_color_names;
};
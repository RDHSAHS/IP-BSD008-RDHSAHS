'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet.init({
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
    breed: DataTypes.STRING,
    color: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    SpeciesId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};
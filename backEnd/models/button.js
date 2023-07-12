'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Button extends Model {
    static associate(models) {}
  }
  Button.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clicks: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Button',
    }
  );
  return Button;
};
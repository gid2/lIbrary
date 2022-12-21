const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Favourite, Book, Comment, Like,
    }) {
      // define association here
      this.hasMany(Favourite, {
        foreignKey: 'userId',
      });
      this.hasMany(Comment, {
        foreignKey: 'userId',
      });
      this.hasMany(Book, {
        foreignKey: 'userId',
      });
      this.hasMany(Like, {
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

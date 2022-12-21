const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Like, Comment, Favourite,
    }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
      this.hasMany(Favourite, {
        foreignKey: 'bookId',
      });
      this.hasMany(Comment, {
        foreignKey: 'bookId',
      });
      this.hasMany(Like, {
        foreignKey: 'bookId',
      });
    }
  }
  Book.init({
    name: DataTypes.STRING,
    title: DataTypes.TEXT,
    author: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.hasMany(models.TypeOfProject, {foreignKey: 'projectID', ondelete: 'cascade', hooks: true});
      Project.hasMany(models.Image, {foreignKey: 'projectID', ondelete: 'cascade', hooks: true});
      // define association here
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    buildingStatus: DataTypes.INTEGER,
    location: DataTypes.STRING,
    thumbnailPathUrl: DataTypes.STRING,
    thumbnailPathName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};
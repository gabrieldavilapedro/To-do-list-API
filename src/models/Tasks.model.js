module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    'Tasks',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      check: DataTypes.BOOLEAN,
    },
    {
      tableName: 'tasks',
    },
  );

  return Tasks;
};

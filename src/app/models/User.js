module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
    name: DataType.STRING,
    email: DataType.STRING,
    password: DataType.VIRTUAL,
    password_hash: DataType.STRING
  })

  return User
}

module.exports = {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  operetorAliases: false,
  define: {
    timestemps: true,
    underscored: true,
    underscoredAll: true
  }
}

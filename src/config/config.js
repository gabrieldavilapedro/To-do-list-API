const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'postgres',
};

const configTest = {
  ...config,
  database: process.env.DB_DATABASE_TEST,
};

module.exports = {
  development: config,
  test: configTest,
  production: config,
};

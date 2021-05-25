const config = {
    development: {
        database: 'user_system',
        username: 'admin',
        password: 'password',
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    },
    api: {
        port: 8000,
    },
    // development: {
    //     database: process.env.MYSQL_DATABASE,
    //     username: process.env.MYSQL_USERNAME,
    //     password: process.env.MYSQL_PASSWORD,
    //     host: process.env.MYSQL_HOST,
    //     dialect: process.env.MYSQL_DIALECT,
    //     port: Number(process.env.MYSQL_PORT),
    // },
    // api: {
    //     port: process.env.SERVER_PORT,
    // },
};

module.exports = config;

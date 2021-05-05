const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'telega_bot', // Название БД
    'postgres', // Пользователь
    '123456', // Пароль
    {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432'
    }
)

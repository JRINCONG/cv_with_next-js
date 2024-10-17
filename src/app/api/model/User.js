const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Users = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.email,
        allowNull: false,
        require
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },

});

module.exports = Users;
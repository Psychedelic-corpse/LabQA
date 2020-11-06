const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const baseModel = require("./base.model");

const User = sequelize.define('user', {
    ...baseModel,
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    dayOfBirth: {
        type: DataTypes.DATE
    }
}, {
    defaultScope: {
        where: {
            isDeleted: false
        },
        order: [['id', 'DESC']]
    }
});

module.exports = User

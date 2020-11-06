const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('sqlite::memory:', {
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        freezeTableName: true,
        timestamps: true,
        underscored: true,
    }
})

sequelize.authenticate()
	.then(() => {
		console.log('Conectada a la base de datos.')
	})
	.catch(err => {
        console.log('No se pudo conectar a la base de datos.')
        console.error(err)
    })

sequelize.sync()

module.exports = {
    sequelize,
    Sequelize
}

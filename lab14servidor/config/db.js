const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    if (!process.env.DB_MONGO) {
        console.error('ERROR: La variable de entorno DB_MONGO no está definida.');
        process.exit(1); // Detenemos la app
    }

    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('BD Conectada');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
        process.exit(1); // Detenemos la app
    }
}

module.exports = conectarDB;

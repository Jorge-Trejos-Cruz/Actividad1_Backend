const mongoose = require('mongoose');

const getConnection = async () => {   
    try {
        const url = 'mongodb://User-IUD:cF2n5QNAehWyHq6v@ac-kqxbpev-shard-00-00.og82ssz.mongodb.net:27017,ac-kqxbpev-shard-00-01.og82ssz.mongodb.net:27017,ac-kqxbpev-shard-00-02.og82ssz.mongodb.net:27017/inventario_iud?ssl=true&replicaSet=atlas-wsnykg-shard-0&authSource=admin&retryWrites=true&w=majority';

    await mongoose.connect(url);

    console.log('Conexion exitosa');
    }catch (error) {
        console.log(error);
    }     
}

module.exports = {
    getConnection,
}
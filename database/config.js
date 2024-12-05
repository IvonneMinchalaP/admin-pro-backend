const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect('mongodb+srv://ivonneroxana16:ddTwTonVmBy7hWTf@cluster0.8i0gb.mongodb.net/hospitaldb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la bd ver logs');
        
    }

}

module.exports ={
    dbConnection
}
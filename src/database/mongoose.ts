import mongoose from 'mongoose';

const mongoConnect = async () => {
    try {
        const mongooseConnect = await mongoose.connect(
            'mongodb://127.0.0.1:27017/user_system',
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            }
        );

        console.log(`MongoDB connected: ${mongooseConnect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default mongoConnect;

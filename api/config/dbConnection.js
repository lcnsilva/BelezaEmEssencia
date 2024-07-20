import mongoose, { mongo } from "mongoose";

async function dbConnection() {
    mongoose.connect(process.env.MONGODB_URI);     
    return mongoose.connection;
}

export default dbConnection;
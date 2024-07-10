import mongoose from "mongoose";
import { getSecret, secretNames } from "../secrets";

export const connect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(getSecret(secretNames.dbUri)).then(
        () => {
            console.log('Connected to mongoDB');
        },
        (err) => console.log('Error connecting to mongoDB', err)
    );
}

const mongoose = require('mongoose');
class MongooseDriver {
    constructor(databasePath) {
        this.databasePath = databasePath;
    }

    async connect() {
        try {
            await mongoose.connect(this.databasePath, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('Connected to the MongoDB database.');
        } catch (err) {
            console.error(err.message);
        }
    }

    async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('Disconnected from the MongoDB database.');
        } catch (err) {
            console.error(err.message);
        }
    }

    async query(modelName, query) {
        try {
            const Model = mongoose.model(modelName);
            const result = await Model.find(query);
            return result;
        } catch (err) {
            throw err;
        }
    }
    async post() {
        

    }
    async get(model, object) {
        try {
            const Model = mongoose.model(model);
            const result = JSON.stringify(await Model.find(object))
            return result;
        } catch (err) {
            throw err;
        }          
    }
    async put() {

    }
    async delete() {

    }
}
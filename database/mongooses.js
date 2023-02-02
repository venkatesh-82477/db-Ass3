const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/Human_Resources1";

const connect = async () => {
    try {
        const client = await mongoose.connect(url);
        console.log("Connectected to db successful")
    } catch (error) {
        console.log("Error in connection via mongoose",error)
    }
}

module.exports = connect

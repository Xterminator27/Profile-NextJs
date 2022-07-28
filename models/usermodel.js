import mongoose from 'mongoose'

const UserModel = new mongoose.Schema({
    userName: {
        type: String
    },
    description: {
        type: String
    },
    job: {
        type: String
    },
    skills: {
            type: String
    },
    interests:{
            type: String
    }
})

module.exports = mongoose.models.UserModel || mongoose.model('UserModel', UserModel);
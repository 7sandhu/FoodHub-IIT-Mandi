const User = require('../schema/userSchema');
const BadRequestError = require('../utils/badRequestError');
const InternalServerError = require('../utils/internalServerError');

async function findUser(parameters) {
    try {
        const response = await User.findOne({ ...parameters });
        return response;
    } catch(error) {
        console.log(error);
    }
    
} 

async function createUser(userDetails) {
    try {
        const response = await User.create(userDetails);
        return response;
    } catch(error) {
        if(error.name === 'ValidationError') {

            const errorMessageList = Object.keys(error.errors).map((property) => {
                return error.errors[property].message;
            });
            throw new BadRequestError(errorMessageList);
        } 
        
        // Handle duplicate key errors (e.g., email or phone already exists)
        if(error.code === 11000 || (error.cause && error.cause.code === 11000)) {
            // Check if it's a transformed error from Mongoose
            const duplicateError = error.cause || error;
            const duplicateField = Object.keys(duplicateError.keyValue)[0];
            const duplicateValue = duplicateError.keyValue[duplicateField];
            throw new BadRequestError([`${duplicateField} '${duplicateValue}' is already in use`]);
        }
        
        // Handle Mongoose transformed duplicate key errors
        if(error.name === 'MongooseError' && error.message && error.message.includes('already in use')) {
            throw new BadRequestError([error.message]);
        }
        
        throw new InternalServerError();
    }
    
}

module.exports = {
    findUser,
    createUser
};
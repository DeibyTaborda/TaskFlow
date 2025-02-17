const bcrypt = require('bcryptjs');

const encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const verifyPassword = async(inputPassword, hashedPassword) => {
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
    return isMatch;
}

module.exports = {
    encryptPassword,
    verifyPassword
};
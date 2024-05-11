const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/WebsiteBanhang', {});
        console.log('Mongodb connected successfully!');
    } catch (error) {
        console.log('Mongodb connect failure!');
        console.log(error);
    }
}
module.exports = { connect };

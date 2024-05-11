module.exports = {
    mutipleMongooseToOpject: function (mongooseArrays) {
        return mongooseArrays.map((mongooseArrays) =>
            mongooseArrays.toObject(),
        );
    },
    mongooseToOpject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};

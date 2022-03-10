const User = require('./user.schema');

this.find = (query) => {
    return User.find(query).lean();
};

this.findOne = (query) => {
    return User.findOne(query).lean();
};

this.find({})

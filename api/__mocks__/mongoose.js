const mongoose = jest.fn();
mongoose.connect = jest.fn();
mongoose.connection = jest.fn();
module.exports = mongoose;
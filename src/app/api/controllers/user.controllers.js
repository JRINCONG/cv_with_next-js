const catchError = require('../utils/catchError');
const Users = require('../model/User');

const getAll = catchError(async(req, res) => {

    const resuls = await Users.findAll()
    return res.json(resuls)
});

module.exports = {
    getAll
}
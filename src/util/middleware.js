const jwt = require('jsonwebtoken');
const User = require('../app/models/User');
const {mutipleMongooseToOpject, mongooseToOpject} = require('../util/mongoose');

const updateHeaderMiddleware = async (req, res, next) => {
    try {
        // Kiểm tra xem có tồn tại cookie accessToken không
        if (req.cookies.accessToken) {
            // Nếu có, giải mã token để lấy thông tin người dùng
            const decoded = jwt.verify(req.cookies.accessToken, 'secretkey');
            // Tìm người dùng trong cơ sở dữ liệu
            const user = await User.findById(decoded.id);
            if (user) {
                // Nếu tìm thấy người dùng, gán thông tin người dùng vào biến locals để sử dụng trong header
                res.locals.user = mongooseToOpject(user);
                res.locals.cartUser = mongooseToOpject(user);
            }
        }
        next(); // Tiếp tục xử lý các middleware hoặc router tiếp theo
    } catch (err) {
        // Xử lý lỗi nếu có
        return res.status(500).json(err);
    }
};

module.exports = updateHeaderMiddleware;

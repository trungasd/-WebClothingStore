const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt')
const { mutipleMongooseToOpject, mongooseToOpject } = require('../../util/mongoose');

class LoginController {
    // [GET] /login
    async index(req, res, next) {
        res.render('login');
    }
    // [POST] /register
    async register(req, res, next) {
        try{
            //res.json(req.body);
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            ///Create new user
            const newUser = await new User({
                fullName: req.body.fullName,
                phone: req.body.phone,
                email: req.body.email,
                account: req.body.account,
                password: hashed,
            });
            newUser.save();
            res.redirect('back');
        }catch(err){
            res.status(500).json(err);
        }
    }

    // [POST] /login
    async login(req, res, next) {
        try {
            // Tìm người dùng trong cơ sở dữ liệu bằng tên tài khoản
            const user = await User.findOne({ account: req.body.account });
            if (!user) {
                // Nếu không tìm thấy người dùng, trả về lỗi
                return res.status(404).json('Sai tên đăng nhập!');
            }
            
            // So sánh mật khẩu được nhập với mật khẩu đã lưu trong cơ sở dữ liệu
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                // Nếu mật khẩu không khớp, trả về lỗi
                return res.status(401).json('Sai mật khẩu!');
            }

            // Nếu đăng nhập thành công, tạo access token
            const accessToken = jwt.sign(
                {
                    id: user._id,
                    admin: user.admin
                },
                "secretkey",
                { expiresIn: '3d' },
            );

            // Lưu access token vào cookie và chuyển hướng về trang chủ
            res.cookie('accessToken', accessToken, { maxAge: 86400, httpOnly: true });
            return res.redirect('/'); // Chuyển hướng về trang chủ
        } catch (err) {
            // Xử lý lỗi nếu có
            return res.status(500).json(err);
        }
    }
    


}

module.exports = new LoginController(); 

const mongoose = require('mongoose');
const {
    mutipleMongooseToOpject,
    mongooseToOpject,
} = require('../../../../util/mongoose');
const Users = require('../../../models/User');
const bcrypt = require('bcrypt')
const Handlebars = require('handlebars');

class AdminnewController {
    //[GET] /admin/users
    async index(req, res, next) {
        Users.find({})
            .then((Users) => {
                //res.json(Users);
                res.render('Admin/users/users', {
                    Users: mutipleMongooseToOpject(Users),
                });
            })
            .catch(next);
    }

    //[GET] /admin/users/create
    create(req, res, next) {
        res.render('Admin/users/add');
    }

    //[GET] /admin/users/:id/edit
    edit(req, res, next) {
        Users.findById(req.params.id)
        .then(User => res.render('Admin/users/edit',{
            User: mongooseToOpject(User)
        }))
        .catch(next)
    }

    //[DELETE] /admin/users/:id
    delete(req,  res, next) {
        Users.deleteOne({ _id: req.params.id })
        .then(()=> res.redirect('back'))
        .catch(next);
    }

    //[PUT] /admin/users/:id
    update(req, res, next){
        //res.json(req.body)
        Users.updateOne({_id : req.params.id}, req.body)
            .then(() => res.redirect('/admin/users'))
            .catch(next);
    }

    //[POST] /admin/users/store
    async store(req, res, next) {
        ///res.json(req.body);
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        ///Create new user
        const users = await new Users({
            fullName: req.body.fullName,
            phone: req.body.phone,
            email: req.body.email,
            account: req.body.account,
            password: hashed,
        });
        users.save()
            .then(() => res.redirect('/admin/users'))
            .catch(next);
    }
}

module.exports = new AdminnewController();

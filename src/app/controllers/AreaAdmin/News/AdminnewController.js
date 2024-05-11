const mongoose = require('mongoose');
const {
    mutipleMongooseToOpject,
    mongooseToOpject,
} = require('../../../../util/mongoose');
const News = require('../../../models/New');
const Handlebars = require('handlebars');

class AdminnewController {
    //[GET] /admin/news
    async index(req, res, next) {
        News.find({})
            .then((News) => {
                res.render('Admin/news/news', {
                    News: mutipleMongooseToOpject(News),
                });
            })
            .catch(next);
    }

    //[GET] /admin/news/create
    create(req, res, next) {
        res.render('Admin/news/add');
    }

    //[GET] /admin/news/:id/edit
    edit(req, res, next) {
        News.findById(req.params.id)
            .then((New) =>
                res.render('Admin/news/edit', {
                    New: mongooseToOpject(New),
                }),
            )
            .catch(next);
    }

    //[DELETE] /admin/news/:id
    delete(req, res, next) {
        News.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PUT] /admin/news/:id
    update(req, res, next) {
        //res.json(req.body)
        News.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/news'))
            .catch(next);
    }

    //[POST] /admin/news/store
    store(req, res, next) {
        //res.json(req.body);
        const fromdata = req.body;
        fromdata.imagenew = `/img/blog/${req.body.imagenew1}`;
        fromdata.imagenew2 = `/img/blog/${req.body.imagenew2}`;
        fromdata.imagenew3 = `/img/blog/${req.body.imagenew3}`;
        const news = new News(fromdata);
        news.save()
            .then(() => res.redirect('/admin/news'))
            .catch(next);
    }
}

module.exports = new AdminnewController();

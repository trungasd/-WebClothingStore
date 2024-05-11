const mongoose = require('mongoose');
const New = require('../models/New');
const {
    mutipleMongooseToOpject,
    mongooseToOpject,
} = require('../../util/mongoose');

class NewsController {
    // [GET] /news
    async index(req, res, next) {
        New.find({})
            .then((New) => {
                res.render('new', {
                    New: mutipleMongooseToOpject(New),
                });
            })
            .catch(next);
    }

    //[GET]/news/:slug
    async show(req, res, next) {
        New.findOne({ slug: req.params.slug })
            .then((New) => {
                res.render('newdetail', { New: mongooseToOpject(New) });
                // res.json({New: mongooseToOpject(New)});
            })
            .catch(next);
    }
}

module.exports = new NewsController();

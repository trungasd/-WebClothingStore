const mongoose = require('mongoose');
const slug = require ('mongoose-slug-updater')
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const New = new Schema({
    idnew: String,
    newdetail: String,
    time: { type: Date, default: Date.now },
    username: String,
    titlenew: { type :String , require: true},
    imagenew: String,
    slug: { type: String, slug: 'titlenew', unique: true },
    imagenew2: String,
    imagenew3: String,
    emphasizenewdetail: String,
});

module.exports = mongoose.model('News', New);

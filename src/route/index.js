const newsRouter = require('./news');
const siteRouter = require('./site');
const headerRouter = require('./header');
const cartRouter = require('./cart');
const authRouter = require('./auth');
const adminproductRouter = require('./Admin/product/adminproduct');
const adminorderRouter = require('./Admin/order/adminorder');
const adminnewRouter = require('./Admin/new/adminnew');
const adminhomeRouter = require('./Admin/adminhome');
const adminuserRouter = require('./Admin/user/adminuser');
const contactRouter = require('./contact');
const accountRouter = require('./account');
const productRouter = require('./products');
function route(app) {
    //app.use('/header', headerRouter);
    app.use('/news', newsRouter);
    app.use('/products', productRouter);
    app.use('/cart', cartRouter);
    app.use('/login', authRouter);
    app.use('/contact', contactRouter);
    app.use('/account', accountRouter);
    app.use('/admin', adminhomeRouter);
    app.use('/admin/products', adminproductRouter);
    app.use('/admin/orders', adminorderRouter);
    app.use('/admin/users', adminuserRouter);
    app.use('/admin/news', adminnewRouter);
    app.use('/', siteRouter);
}

module.exports = route;

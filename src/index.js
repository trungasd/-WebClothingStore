const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const route = require('./route');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const flash = require('connect-flash');
const methodOverride = require('method-override');
const db = require('./config/db');
const updateHeaderMiddleware = require('./util/middleware');
const cors = require('cors')

const bodyParser = require('body-parser');
//  connect db
db.connect();
const app = express();
const port = 3000;
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); //Khi gọi file
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(flash());
app.use(cookieParser());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(updateHeaderMiddleware);

// HTTP logger, được sử dụng để gỡ lỗi
app.use(morgan('combined'));

// Khởi tạo Handlebars engine
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'view'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

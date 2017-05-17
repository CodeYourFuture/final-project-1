import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import exphbs from 'express-handlebars';
import expressValidator from 'express-validator';
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';
// import localStrategy from 'passport-local';
import path from 'path';
import routes from './controller/routes';

if (process.env.MONGODB_URI) {
  console.log('Connecting to remote mongo instance');
  mongoose.connect(process.env.MONGODB_URI);
} else {
  console.log('Connecting to local mongo instance');
  mongoose.connect('mongodb://localhost/rams_projects');
}

console.log('Connected to mongo');

const app = express();
// bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// view Engine
app.set('views', path.join(process.cwd(), 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// express validator
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    const namespace = param.split('.');
    const root = namespace.shift();
    let formParam = root;
    while (namespace.lenght) {
      formParam += `{ ${namespace.shift()} }`;
    }
    return {
      param: formParam,
      msgs: msg,
      values: value,
    };
  },
}));

// connect flash
app.use(flash());

// Global Vars Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.get('/', routes.getDashBoard);
app.get('/signup', routes.getSignUp);
app.get('/login', routes.getlogin);
app.get('/api/migrate', routes.getImport);
app.get('/api/all/organisation', routes.getAllOrganisation);
app.get('/api/organisation/services', routes.getServices);
app.get('/api/organisation/services/:service', routes.getOrganisation);
app.get('/api/all/users', routes.getUsers);
app.get('/api/organisation/postcode', routes.getPostcode);
app.get('/api/organisation/search', routes.getSearchedOrganisation);
app.get('/api/organisation/borough', routes.getBorough);
app.get('/api/organisation/area', routes.getArea);
app.post('/api/organisation/post', routes.postOrganisation);
app.put('/api/organisation/put', routes.putOrganisation);
// ********************************************************
// ********************Production**************************
// ********************************************************
// setup the server to serve the React bundle in production
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT ? process.env.PORT : 3001;

app.listen(port);

console.log(`Server has started on port ${port}`);

export default app;

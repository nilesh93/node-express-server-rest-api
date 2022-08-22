"use strict";

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("./models"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // * Application-Level Middleware * //
// Third-Party Middleware

app.use((0, _cors.default)()); // Built-In Middleware

app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
})); // Custom Middleware

app.use((req, res, next) => {
  req.context = {
    models: _models.default,
    me: _models.default.users[1]
  };
  next();
}); // * Routes * //

app.use('/session', _routes.default.session);
app.use('/users', _routes.default.user);
app.use('/messages', _routes.default.message); // * Start * //

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
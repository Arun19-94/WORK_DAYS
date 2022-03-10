const ExpressService = require('./component/express/express.service');

const MongooseService = require('./component/mongo/mongoose.service');

// const SocketService = require('./component/socket/socketIO.service');
this.init = async () => {
  await MongooseService.connect();
  await ExpressService.connect();
//   await SocketService.connect(ExpressService.server);
  ExpressService.app.use((req, res, next) => next());
  require('./routes.js')(ExpressService.app);
};

this.init();
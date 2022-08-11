const ExpressService = require('./components/express.service')
this.init = async () => {
    await ExpressService.connect();
    ExpressService.app.use((req, res, next) => next());
    require('./components/route')(ExpressService.app);
}
this.init()
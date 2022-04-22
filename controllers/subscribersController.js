const Subscriber = require("../models/subscriber")

exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find({}, (error, subscriber) => {
        if (error) next(error);
        req.data = subscriber;
        next();
    });
};
exports.getSingleSubscribers = (req, res,next) => {
    let paramsName = req.params.number;
    console.log(paramsName)
    Subscriber.find({zipCode: paramsName}, (error, subscriber) => {
        if (error) next(error);
        req.data = subscriber;
        next()
    });
};

exports.getSubscriptionPage = (req, res) => {
    res.render("contact")
}

exports.deletePage = (req, res, next) => {
    Subscriber.find({}, (error, subscriber) => {
        if (error) next(error);
        req.data = subscriber;
        next();
    });
};

exports.delete = (req, res, next) => {
    let userId = req.params.id;
    console.log("deleting")
    Subscriber.findByIdAndRemove(userId)
      .then(() => {
        res.locals.redirect = "/home";
        next();
      })
      .catch(error => {
        console.log(`Error deleting user by ID: ${error.message}`);
        next();
      });
  }
exports.redirectView = (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath !== undefined) res.redirect(redirectPath);
    else next();
  }

exports.saveSubscriber = (req, res,next) => {
    
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.id,
        link: req.body.link,
    });
    newSubscriber.save((error, result) => {
        if (error) res.render("error");
        res.render("thanks")
    });
};
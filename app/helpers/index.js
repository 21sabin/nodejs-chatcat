const router = require("express").Router();
const UserModel = require("../model/User");

let _registerRoutes = (routes, method) => {
  console.log(routes, "route");
  for (let key in routes) {
    if (
      routes[key] !== null &&
      typeof routes[key] == "object" &&
      !(routes[key] instanceof Array)
    ) {
      _registerRoutes(routes[key], key);
    } else {
      if (method == "get") {
        //register routes to the router module
        router.get(key, routes[key]);
      } else if (method == "post") {
        router.post(key, routes[key]);
      }
    }
  }
};

let route = routes => {
  console.log(routes, "routes");
  _registerRoutes(routes);
  return router;
};

const findUser = profile => {
  return UserModel.findOne({profileId:profile.id});
};

const createUser = profile => {
  return new Promise((resolve, reject) => {
    const newUser = new UserModel({
      profileId: profile.id,
      fullName: profile.displayName,
      profilePic: profile.photos[0].value || ""
    });
    newUser.save(error => {
      if (error) {
        reject(error);
      } else {
        resolve(newUser);
      }
    });
  });
};

const findById = profileId =>{
  return UserModel.findById(profildId);
}

module.exports = {
  route,
  createUser,
  findUser,findById
};

const router = require('express').Router();


let _registerRoutes = (routes, method) => {
    console.log(routes, "route")
    for (let key in routes) {
        if (routes[key] !== null && typeof routes[key] == 'object' && !(routes[key] instanceof Array)) {
            _registerRoutes(routes[key], key)
        } else {
            if (method == 'get') {
                //register routes to the router module
                router.get(key, routes[key])
            } else if (method == 'post') {
                router.post(key, routes[key])
            }
        }
    }
}

let route = (routes) => {
    console.log(routes, 'routes');
    _registerRoutes(routes);
    return router;
}
module.exports = {
    route
}
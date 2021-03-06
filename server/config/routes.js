const path = require("path");

const users = require('./../controller/users.js')

module.exports = app => {
    app.get("/get_all_users", users.get_all);
    app.get("/am_i_logged_in", users.am_i_logged_in);
    app.post("/login", users.login);
    app.get("/logout", users.logout);
    app.post("/addToWatchlist", users.addToWatchlist);
    app.post("/getwatchdetails", users.getwatchdetails);
    app.post("/addToBrowse", users.addToBrowse);
    app.get("/getBrowsingHistory", users.getBrowsingHistory);
    app.get("/getwatchlist", users.getwatchlist);
    app.post("/addtoCart", users.addtoCart);
    app.get("/getOrderDetails", users.getOrderDetails);
    app.get("*" , ( req,res ) => res.sendFile(path.resolve("./client/dist/index.html")));
    
}

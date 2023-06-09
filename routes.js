const userController = require("./controllers/user.controller.js");
const matchController = require("./controllers/match.controller.js");
const cardController = require("./controllers/card.controller.js");

const router = require("express").Router();

//users
router.post("/users/addUser", userController.addUser);
router.get("/auth/:mobile_id", userController.auth);
router.get("/users", userController.getUsers);
router.get("/users/ready/:match_id", userController.ready);
router.get("/users/exit/:match_id", userController.exit);

//matches
router.post("/matches/addMatch", matchController.addMatch);
router.put("/matches/checkFive", matchController.checkFive);
router.put("/matches/checkBingo", matchController.checkBingo);
router.get("/matches/:state", matchController.getMatches);
router.get("/matches/getNumber/:match_id", matchController.getNumber);
router.get("/match/:match_id", matchController.getMatch);

//cards
router.post("/cards/joinGame", cardController.joinGame);

module.exports = router;

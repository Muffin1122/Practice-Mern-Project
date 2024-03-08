
const express = require('express');
const userController = require('../controllers/userController');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get("/", (req, res) => {
  res.send('This is the user route');
});
/*test route is to create user in DB*/
router.post("/test", userController.test);
/**ayesha route is to generate token */
router.get("/ayesha" , userController.ayesha);
/**checkroute is to check specific id of user */
router.get("/fetch_User/:id", studentController.fetch_User);

module.exports = router;
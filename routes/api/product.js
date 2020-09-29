var express = require("express");
var router = express.Router();
var productsCtrl = require("../../controllers/products");


router.get("/", productsCtrl.index);
router.get("/:id", productsCtrl.show);
router.post("/", productsCtrl.create);
/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require("../../config/auth"));
router.delete("/:id", checkAuth, productsCtrl.deleteOne);
router.put("/:id", checkAuth, productsCtrl.update);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}
module.exports = router;

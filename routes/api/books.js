const router = require("express");
const booksController = "../../src/controllers/booksController";


router.route("/")
.get(booksController.findAll)
.post(booksController.create);

router.route("/:id")
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove);

module.exports = router;

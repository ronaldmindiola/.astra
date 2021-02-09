const { Router } = require("express");
const router = Router();

const {
    getLists,
    getList,
    createList,
    updateList,
    deleteList
  
} = require("../controller/lists.controller");

router.route("/")
    .get(getLists)
    .post(createList)

router.route("/:id")
    .get(getList)
    .put(updateList)
    .delete(deleteList);

module.exports = router;
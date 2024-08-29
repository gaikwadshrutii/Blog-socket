const { deleteBlog, updateBlog, createBlog, readBlog } = require("../controller/blog.controller")

const router = require("express").Router()

router
    .get("/", readBlog)
    .post("/add", createBlog)
    .put("/update/:id", updateBlog)
    .delete("/delete/:id", deleteBlog)

module.exports = router
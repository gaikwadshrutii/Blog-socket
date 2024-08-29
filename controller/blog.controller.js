const asyncHandler = require("express-async-handler")
const Blog = require("../model/Blog")
const { io } = require("../socket/socket")


exports.createBlog = asyncHandler(async (req, res) => {
    await Blog.create(req.body)
    const result = await Blog.find()
    io.emit("blog-create-response", result)
    res.json({ message: "Blog Create Success" })
})
exports.readBlog = asyncHandler(async (req, res) => {
    const result = await Blog.find()
    res.json({ message: "Blog read Success", result })
})
exports.updateBlog = asyncHandler(async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Blog update Success" })
})
exports.deleteBlog = asyncHandler(async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id)
    const result = await Blog.find()
    io.emit("blog-create-response", result)
    res.json({ message: "Blog delete Success" })
})

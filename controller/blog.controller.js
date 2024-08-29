const asyncHandler = require("express-async-handler")
const Blog = require("../model/Blog")

exports.createBlog = asyncHandler(async (req, res) => {
    await Blog.create(req.body)
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
    res.json({ message: "Blog delete Success" })
})

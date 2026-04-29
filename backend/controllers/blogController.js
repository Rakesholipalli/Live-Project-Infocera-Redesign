const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const { title, content, excerpt, category, tags, featuredImage } = req.body;
    const userId = req.userId;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const blog = new Blog({
      title,
      slug,
      author: userId,
      content,
      excerpt: excerpt || content.substring(0, 200),
      category,
      tags: Array.isArray(tags) ? tags : tags?.split(',').map(t => t.trim()),
      featuredImage
    });

    await blog.save();

    res.status(201).json({
      message: 'Blog post created successfully',
      blog
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const { published = false, category } = req.query;
    let query = {};
    
    if (published === 'true') {
      query.published = true;
    }
    if (category) {
      query.category = category;
    }

    const blogs = await Blog.find(query)
      .populate('author', 'firstName lastName email')
      .sort({ createdAt: -1 });
    
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate('author', 'firstName lastName email');
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.publishBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { published: true, updatedAt: new Date() },
      { new: true }
    );
    res.json({ message: 'Blog published', blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { author, email, text } = req.body;
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    blog.comments.push({ author, email, text });
    await blog.save();

    res.json({ message: 'Comment added', blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

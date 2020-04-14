const express = require('express');
const router = express.Router();

router.post('/create', (req, res, next) => {
const newBlog = new Blog();

  newBlog.title= req.body.title;
  newBlog.author = req.body.author;
  newBlog.subject = req.body.subject;
  newBlog.article = req.body.article;

  newBlog.save().then((blog) => {
    if(blog) {
      res.status(200).json({message: 'success', blog})
    }
  }).catch(err=> {
    return next(err);
  })
    } 
  )
  
router.post('/update', (params, id) => {
    return new Blog((resolve, reject) => {
      Blog.findById(id)
        .then(blog => {
          if (params.title) blog.profile.name = params.title;
          if (params.author) blog.email = params.author;
          if (params.subject) blog.address = params.subject;
          if (params.article) blog.article = params.article;
          return blog;
        })
        .then(blog => {
          blog.save().then(blog => {
            resolve(blog);
          });
        })
        .catch(err => reject(err));
    }).catch(err => reject(err));
  })


  router.delete('/delete', (req, res) => {
    Blog.findOneAndDelete({ blog: req.params.blog }).then((blog) => {
        if(blog) {
            return res.status(200).json({message: "blog deleted", blog});
            } else {
            return res.status(400).json({message: "No blog to delete"})
        }
    }).catch((err) => res.status(400).json({message: 'blog Not Deleted', err}))
})

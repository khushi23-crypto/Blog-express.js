const express = require('express')
const router=express.Router()
const path=require('path')
const blogs=require('../data/blogs')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

router.get('/blog',(req,res)=>{
    /* blogs.forEach(e=>{
        console.log(e.title)
    }) */
    res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
})
router.get('/blogpost/:slug',(req,res)=>{
    myBlog=blogs.filter((e)=>{
        e.slug==req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname,'../templates/blogPage.html'))
})

module.exports=router
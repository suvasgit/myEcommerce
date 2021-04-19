const express=require('express');
const { getHello, postCategory, getALLCategory, CategoryById, getSingleCategory, deleteCategory, updateCategory } = require('../controller/category');
const router=express.Router();


router.get('/hello',getHello) 
router.post('/postcategory',postCategory)
router.get('/categorylist',getALLCategory)
router.param('/categoryId',CategoryById)
router.get('/read/:categoryById',getSingleCategory)
router.delete('/deletecategory/:categoryId',deleteCategory)
router.put('/updatecategoory/:categoryId',updateCategory)




module.exports=router
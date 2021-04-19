const express=require('express')
const {postProduct,productList,ProductById,read,deleteProduct, updateProduct}=require('../controller/category')
const router=express.Router();


router.post('/postproduct',postProduct)
router.get('/productlist',productList)
router.param('productId',ProductById)
router.get('/singleproduct/:productId',read)
router.delect('/delectproduct/:productId',deleteProduct)
router.put('/updateproduct/:productId',updateProduct)




module.exports=router
const Product=require('../model/productModel')

exports.postProduct=(req,res)=>{
    let product =new Product({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_quantity:req.body.product_quantity,
        product_rating:req.body.product_rating,
        category:req.body.category,
        product_description:req.body.product_description,
    })
    product.save((error, products)=>{
        if(error || !products){
            return res.status(400).json({error:"something notright"})
        }

        res.json({products})
    })
}


exports.productList=(req,res)=>{
    productList.find().exec((error,products)=>{
        if(error || !products){
            return res.status(400).json({error:"Products not found"})
        }
        res.json({products})
    })
}


//product by ID
exports.productById=(req,res,next,id)=>{
    product.findById(id).exec((error,products)=>{
        if(error || !products){
            return res.status(400).json({error:"Products not found"})
        }
        res.product=product
        next()
    })
}


//to show single product

exports.read=(req,res)=>{
    res.json(req.product)
}


//to delect product
exports.deleteProduct=(req,res,next,id)=>{
    const product=req.product
    product.remove((error,result)=>{
        if(error || !result){
            return res.status(400).json({error:"fail to delete product"})
        }
        res.json({message:"product deleted"})
    })
}


//update product
exports.updateProduct=(req,res)=>{
    let product=req.product
    product.product_name=req.body.product_name,
    product.product_price=req.body.product_price,
    product.product_quantity=req.body.product_quantity,
    product.product_description=req.body.product_description,
    product.category=req.body.category,

    product.save((error,result)=>{
        if(error || !result){
            return res.status(400).json({error:"fail to update product"})
        }
        res.json({result})
    })
}
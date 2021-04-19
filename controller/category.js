const Category = require('../model/categoryModel')

exports.getHello = (req, res) => {
    res.send('hello world');
}


exports.postCategory = (req, res) => {
    let category = new Category(req.body)
    category.save((error, category) => {
        if (error || !category) {
            return res.status(400).json({ error: 'something went wrong' })
        }

        res.json({ category })
    })
}

exports.getALLCategory=(req,res)=>{
 Category.find().exec((error,category)=>{
     if(error||!category){
         return res.status(400).json({error:"category not found"})
        }
        res.json(category)
 })
}

//category by Id

exports.CategoryById=(req,res,next,id)=>{
    Category.findById(id).exec((error, category)=>{
        if (error || !category){
            return res.status(400).json({error:"category not found"})
        }
        res.category=category
        next()
    })
}


//to delete category
exports.deleteCategory=(req,res,next,id)=>{
    const category=req.category
    category.remove((error,result)=>{
        if(error || !result){
            return res.status(400).json({error:"fail to delete category"})
        }
        res.json({message:"category deleted"})
    })
}


//to update category
exports.updateCategory=(req,res)=>{
    const category=req.category
    category.category_name=req.body.category_name
    category.save((error,category)=>{
        if(error || !category){
            return res.status(400).json({error:"fail to update category"})
        }
        res.json({category})
    })
}
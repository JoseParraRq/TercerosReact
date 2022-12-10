const {ProductLogic} = require('./../logic/productLogic');

class ProductController{
    
    
    async createProduct(req,res){
        try {
            
            let product={
                "product_name":req.body.product_name,
                "product_category":req.body.product_category,
                "created_by":req.body.created_by,
                "quantity":req.body.quantity
            }
            console.log("here the product before",product);
            let productInto = await new ProductLogic().createProductLogic(product);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"});
    }

    async getAllProducts(req,res){
        try {
            var products = await new ProductLogic().getAllProductsLogic();
            console.log("here the users in the controller",products);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json({products});//"successful request"
      
    }

   async getProductById(req,res){
        try {
            var product = await new ProductLogic().getProductById(req.body);
            console.log("her ethe forms in the controller",product);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({product});
    }
  
    async updateProduct(req,res){
        try {
            var productUpdate = await new ProductLogic().updateProduct(req.body);
            console.log("here the product in the controller",productUpdate);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({productUpdate});
    }
  
}


module.exports = { ProductController };
const productModel = require('./products.model')
module.exports = {
 Query:{
    products: () => {
        return productModel.getAllProducts()
    },
    productByPrice:(_,args)=>{
      return productModel.getproductByPrice(args.min,args.max)
    },
    productById:(_,args)=>{
        return productModel.getProductById(args.prdId)
    }
 },
 Mutation:{
    addNewProduct: (_,args)=>{
        return productModel.addNewProduct(args.id,args.description,args.price)
    },
    addNewProductReview: (_,args)=>{
        productModel.addNewProductReview(args.id,args.rating,args.comment);
    }
 }
}

// {
//     Query:{
//         products: async (parent) =>{
//             console.log('Getting the products...')
//             const product = Promise.resolve(parent.products)
//             return product
//         },
//         orders: (parent) =>{
//             console.log('Getting order')
//             return parent.orders
//         }
//     }
// }
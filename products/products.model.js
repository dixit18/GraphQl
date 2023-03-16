const products=[
    {
        id:'redshoe',
        description: 'Red Shoe',
         price:42.12,
         reviews: []
    },{
        id:'bluejean',
        description:'blue heabns',
        price:55.41,
        reviews: []
    }
]

function getAllProducts(){
    return products
}
function getproductByPrice(min,max){
  return   products.filter((product)=>{
        return product.price >= min && product.price <=max
    })
}
function getProductById(id){
    return products.find((product)=>{
        return product.id === id
    })
}
function addNewProduct(id,description,price){
    const newProduct = {
        id,
        price,
        description,
        reviews:[]
    }
    products.push(newProduct)
    return newProduct
}
function addNewProductReview(id,rating,comment){
    const matchedProduct = getProductById(id);
console.log(matchedProduct)
    if(matchedProduct){
        const newProductReview = {
            rating,
            comment
        }
        console.log(newProductReview)
        matchedProduct.reviews.push(newProductReview)
        return newProductReview
    }
}
module.exports = {
    getAllProducts,getproductByPrice,getProductById,addNewProduct,addNewProductReview
}
const ProductRespository = require('../repositories/productRepository');
const fs = require('fs/promises');
const InternalServerError = require('../utils/internalServerError');
const NotFoundError = require('../utils/notFoundError');

async function createProduct(productDetails) {
    const imagePath = productDetails.imagePath;
    let productImage = '/vite.svg';
    
    if(imagePath) {
        try {
            productImage = productDetails.productImage || '/vite.svg';
            
            try {
                await fs.unlink(process.cwd() + "/" + imagePath);
            } catch(unlinkError) {
                // File cleanup failed, continue
            }
        } catch(error) {
            throw new InternalServerError();
        }
    }

    const product = await ProductRespository.createProduct({
        ...productDetails,
        productImage: productImage
    });
        
    return product;
    

}

async function getProductById(productId) {
    const response = await ProductRespository.getProductById(productId);
    if(!response) {
        throw new NotFoundError('Product');
    }
    return response;
}

async function getAllProductsData() {
    const response = await ProductRespository.getAllProducts();
    if(!response) {
        throw new NotFoundError('Product');
    }
    return response;
}

async function deleteProductById(productId) {
    const response = await ProductRespository.deleteProductById(productId);
    if(!response) {
        throw new NotFoundError('Product');
    }
    return response;
}


module.exports = {
    createProduct,
    getProductById,
    deleteProductById,
    getAllProductsData
}
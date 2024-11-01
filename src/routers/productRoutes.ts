import { Router } from "express";
import {
    getAllProducts,
    getProductsByID,
    createProduct ,
    updateProduct,
    deleteProduct,



}from "../controllers/productController";

const router = Router();

router.get("product/",getAllProducts);// trae todos los productos  
router.get("product/:id",getProductsByID);// trae un producto por id 
router.get("product/",createProduct);// crea los productos
router.get("product/:id",updateProduct);// actualiza los productos  
router.get("product/:id",deleteProduct);// borra  los productos 

export default router; 
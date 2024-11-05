import { Router } from "express";
import {
    getAllProducts,
    getProductsByID,
    createProduct ,
    updateProduct,
    deleteProduct,



}from "../controllers/productController";

const routes = Router();
/**
 * @swagger
 *  tags:
 *  name: products 
 *  description: CRUD relacionado con productos 
 * 
 */


routes.get("/",getAllProducts);// trae todos los productos  
routes.get("/:id",getProductsByID);// trae un producto por id 
routes.get("/",createProduct);// crea los productos
routes.get("/:id",updateProduct);// actualiza los productos  
routes.get("/:id",deleteProduct);// borra  los productos 

export default routes ; 
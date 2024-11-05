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

/**
 * @swagger 
 * /api/products:
 *     get:
 *       summary: obtener todos los productos
 *       tags: [products]
 *       responses: 
 *        200:
 *          description: Lista de productos             
 *   
 */
routes.get("/",getAllProducts);// trae todos los productos  

/**
 * @swagger
 * /api/products/{id}:
 *      get:
 *          summary: obtener producto por ID
 *          tags: [products]
 *          parameters:
 *              - in: path     
 *                name: id 
 *                requerid: true
 *                schema:
 *                  type: integer
 *          description: ID del producto
 *          responses:
 *              200:
 *                  description: detalle del producto
 *              404:
 *                  description: detalle del producto                
 */
routes.get("/:id",getProductsByID);// trae un producto por id 
/**
 * @swagger 
 * /api/products:
 *  post:
 *    summary: Crear un nuevo producto
 *    tags: [products]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              requierd:
 *                - name: 
 *                - description:
 *                - price:
 *              properties:
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *                price:
 *                  type: number      
 *    responses:
 *      201:
 *        description: Producto creado 
 *      501: 
 *        description: error en el servidor                 
 */

routes.get("/",createProduct);// crea los productos
routes.get("/:id",updateProduct);// actualiza los productos  
routes.get("/:id",deleteProduct);// borra  los productos 

export default routes ; 
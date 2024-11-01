
import swaggerJSDoc,{ Options} from "swagger-jsdoc";

const swaggerOptions: Options ={  
      definition:{
        openapi : "3.0.0",
        info : {
            title : "backendServiceApi - Mateo Varela",
            version : "1.0.0",
            description : "API para catalogo de productos"
        },
        servers:[
            {
                url:"http://localhost:3000/"
            }
        ]
    
      },
      apis:[
        "./src/routers/productRoutes.ts"
      ]
      
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;

import express from 'express';
import permissionRoutes from './modules/permission/permission.routes';
import { ErrorHandler } from './middlewares/errorHandler';
import morgan from 'morgan';


class Application{
    app: express.Application;

    constructor(){
        this.app = express();
        this.middlewares();
        this.mountRoutes();
        // this.app.use(ErrorHandler.LogError);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'))
    }

    mountRoutes(){
        this.app.use('/permissions', permissionRoutes)
    }
}

export default new Application().app;
import express from 'express';
import permissionRoutes from './modules/permission/permission.routes';
import roleRoutes from './modules/roles/role.routes';
import morgan from 'morgan';


class Application{
    app: express.Application;

    constructor(){
        this.app = express();
        this.middlewares();
        this.mountRoutes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'))
    }

    mountRoutes(){
        this.app.use('/permissions', permissionRoutes)
        this.app.use('/roles', roleRoutes)
    }
}

export default new Application().app;
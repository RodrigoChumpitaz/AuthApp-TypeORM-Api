import { Router } from "express";
import { PermissionController } from "./permission.controller";

class PermissionRoutes{
    router: Router;
    controller: PermissionController;

    constructor(){
        this.router = Router();
        this.controller = new PermissionController();
        this.mountRoutes();
    }
    mountRoutes(){
        this.router.get('/get', this.controller.getAll)
        this.router.post('/add', this.controller.insert)
    }
}

export default new PermissionRoutes().router;
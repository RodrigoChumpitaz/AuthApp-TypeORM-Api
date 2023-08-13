import { Router } from "express";
import { RoleController } from "./role.controller";

class RoleRouter{
    router: Router;
    controller: RoleController;
    constructor(){
        this.router = Router();
        this.controller = new RoleController();
        this.routes();
    }

    routes(){
        this.router.get('/get', this.controller.getAll)
    }
}

export default new RoleRouter().router;
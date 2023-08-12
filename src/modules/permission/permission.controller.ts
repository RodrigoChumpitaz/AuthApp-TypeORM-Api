import { Request, Response } from "express";
import { PermissionFactory } from "./domain/permission.factory";
import PermissionService from "../../services/permission.service";
import { PermissionInfraestructure } from "./infraestructure/permission.infraestructure";
import { ErrorHandler } from "../../middlewares/errorHandler";

const permissionInfraestructure = new PermissionInfraestructure();
const permissionService = new PermissionService(permissionInfraestructure);
export class PermissionController{
    constructor(){

    }

    async getAll(req: Request, res: Response){
        res.send('Hello World');
    }

    async insert(req: Request, res: Response){
        try {
            const { name, role } = req.body;
            const permissionInsert = PermissionFactory.create(name, role);
            await permissionService.insert(permissionInsert);
            res.json({
                message: 'Permission created successfully'
            });
        } catch (error) {
            ErrorHandler.LogError(error, req, res);
        }
    }
}
import { Request, Response } from "express";
import { PermissionFactory } from "./domain/permission.factory";
import PermissionService from "../../services/permission.service";
import { PermissionInfraestructure } from "./infraestructure/permission.infraestructure";
import { ErrorHandler } from "../../middlewares/errorHandler";

const permissionInfraestructure = new PermissionInfraestructure();
const permissionService = new PermissionService(permissionInfraestructure);
export class PermissionController{
    constructor(){
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.disabled = this.disabled.bind(this);
    }

    async getAll(req: Request, res: Response){
        const permissions = await permissionService.getAll();
        if(permissions instanceof Error) return ErrorHandler.LogError(permissions, req, res);
        return res.json(permissions);        
    }

    async insert(req: Request, res: Response){
        const { name, role } = req.body;
        const permissionInsert = PermissionFactory.create(name, role);
        if(permissionInsert instanceof Error) return ErrorHandler.LogError(permissionInsert, req, res);

        await permissionService.insert(permissionInsert);
        return res.json({
            message: 'Permission created successfully'
        });
    }

    async update(req: Request, res: Response){
        // try {
        //     const { slug } = req.params;
        //     const { name, role } = req.body;
        //     const permissionUpdate = PermissionFactory.create(name, role);
        //     await permissionService.update(slug, permissionUpdate);
        //     return res.json({
        //         message: 'Permission updated successfully'
        //     })
        // } catch (error) {
        //     ErrorHandler.LogError(error, req, res);
        // }
    }

    async disabled(req: Request, res: Response){
        const { slug } = req.params;
        const deleted = await permissionService.disabled(slug);
        if(deleted instanceof Error) return ErrorHandler.LogError(deleted, req, res);
        return res.json({
            message: 'Permission disabled successfully'
        })
    }
}
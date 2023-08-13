
export class RoleController{
    constructor(){

    }

    async getAll(req: any, res: any){
        return res.json({message: "Get all roles"})
    }
}
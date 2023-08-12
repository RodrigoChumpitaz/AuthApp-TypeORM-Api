import Environment, { IDbConfig } from "../core/environment/env";
import { DataSource } from "typeorm";
import IBootstrap from "./bootstrap.interface";

// let appDataSource: DataSource;
export default class DatabaseBootstrap implements IBootstrap{
    private static appDataSource: DataSource; 
    init(): Promise<any> {
        const dbConfig: IDbConfig = Environment.DB_CONFIG;
        const AppDataSource = new DataSource({
            type: "mysql",
            ...dbConfig,
            migrations: [],
            subscribers: []
        })
        DatabaseBootstrap.appDataSource = AppDataSource;
        return AppDataSource.initialize();
    }
    close(): void {
        DatabaseBootstrap.appDataSource?.destroy();
    }

    static get AppDataSource(): DataSource{
        return DatabaseBootstrap.appDataSource;
    }

}
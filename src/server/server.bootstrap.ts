import { Application } from 'express';
import http from 'http';
import env from '../core/environment/env';
import IBootstrap from './bootstrap.interface';

export default class implements IBootstrap{

    constructor(private app: Application){}

    init(): Promise<any>{
        return new Promise((resolve, reject) => {
            const server = http.createServer(this.app);
            server
                .listen(env.PORT)
                .on("listening", () => {
                    console.log(`Listening on port ${env.PORT}`);
                    resolve(`Listening on port ${env.PORT}`);
                })
                .on("error", (err) => {
                    reject(err);
                    console.log("Error: ", err);
                    process.exit(1);
                })
        });
    }

    close(): void {
        process.exit(1);
    }

}
import { NextFunction, Request, Response } from 'express';
import winston from 'winston';

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: "logs/error.log", level: "error" }),
        new winston.transports.Console()
    ],
});

export class ErrorHandler extends Error{
    name: string;
    constructor(){
        super();
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }

    static LogError(err: any, req: Request, res: Response){
        const statusCode = err.statusCode || 500;
        const is_success = err.is_success || false;
        const message = err.message || 'Something went wrong';

        const stackTrace = err.stack || '';
        const fileMatch = stackTrace.match(/\((.*):\d+:\d+\)/);
        const file = fileMatch ? fileMatch[1] : null;
        
        logger.error({
            timestamp: new Date().toISOString(),
            url: req.originalUrl,
            method: req.method,
            file: file,
            statusCode: statusCode,
            is_success: is_success,
            message: message
        });

        res.status(statusCode).json({
            error:{
                title: this.name,
                status: statusCode,
                source: req.originalUrl,
                is_success: is_success,
                message: message
            }
        });
    }
}

// export function handleError(err: any, req: Request, res: Response, next: NextFunction){
//     ErrorHandler.LogError(err, req, res, next);
// }

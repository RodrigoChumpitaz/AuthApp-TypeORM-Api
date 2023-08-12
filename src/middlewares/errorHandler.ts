import { NextFunction, Request, Response } from 'express';
import winston from 'winston';

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.Console()   
    ]
});

export class ErrorHandler{
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
                statusCode: statusCode,
                is_success: is_success,
                message: message
            }
        });
    }
}



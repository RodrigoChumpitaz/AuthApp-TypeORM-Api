import app from './app';
import DatabaseBootstrap from './server/database.bootstrap';
import ServerBootstrap from './server/server.bootstrap';

(async () => {
    const server = new ServerBootstrap(app);
    const database = new DatabaseBootstrap();
    try {
        const listPromise = [server.init(), database.init()];
        await Promise.all(listPromise);
        console.log("Database is running")
    } catch (error) {
        console.log(error);
        database.close();
        server.close();
        throw new Error(error);
    }
})()
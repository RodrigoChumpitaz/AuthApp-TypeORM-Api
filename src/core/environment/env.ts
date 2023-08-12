import { config } from "dotenv"
config();

export interface IDbConfig{
    host: string;
    port: number;
    entities: string[] | any;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
}

export default class Environment{
    static env: NodeJS.ProcessEnv = process.env;

    public static get PORT(): Number{
        return Number(this.env.PORT) || 3000;
    }

    public static get DB_CONFIG(): IDbConfig{
        return {
            host: this.env.DB_HOST || "localhost",
            port: Number(this.env.DB_PORT) || 3306,
            entities: [this.env.DB_ENTITIES],
            username: this.env.DB_USERNAME,
            password: this.env.DB_PASSWORD,
            database: this.env.DB_NAME,
            synchronize: Boolean(this.env.DB_SYNCHRONIZE) || true,
            logging: false
        }
    }
}


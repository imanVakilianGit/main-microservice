declare namespace NodeJS {
    export interface ProcessEnv {
        HOST: string;
        PORT: string;
        DATABASE_HOST: string;
        DATABASE_PORT: number;
        DATABASE_PASSWORD: string;
        DATABASE_USERNAME: string;
        DATABASE_NAME: string;
    }
}

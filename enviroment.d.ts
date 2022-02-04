declare global {
    namespace NodeJS {
        interface ProcessEnv {
            token: string;
            guildID: string;
            enviroment: "dev" | "prod" | "debug";
        }
    }
}

export {};
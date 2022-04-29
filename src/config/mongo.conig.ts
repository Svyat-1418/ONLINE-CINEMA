import {TypegooseModuleOptions} from "nestjs-typegoose";
import {ConfigService} from "@nestjs/config";

export const getMongoDbConfig = async (configService: ConfigService):Promise<TypegooseModuleOptions> => ({
    uri: configService.get("MONGO_URI")
})
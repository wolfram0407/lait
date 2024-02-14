import { SetMetadata } from "@nestjs/common";
import { Role } from "../types/userRoles.type";



export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
import { UserRoleEnum } from '../users/enums/user-role.enum';

export interface JwtPayload {
  email?: string;
  sub: string;
  name?: string;
  role?: UserRoleEnum;
}

export interface Payload {
  email?: string;
  firebase_id: string;
  name?: string;
  role?: UserRoleEnum;
  image?: string;
}

import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  referralLink?: string | null;
  roles: InputJsonValue;
  shared?: number | null;
  step?: number | null;
  username: string;
  verifications?: number | null;
};

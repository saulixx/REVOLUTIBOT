import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  referralLink: string | null;
  roles: JsonValue;
  shared: number | null;
  step: number | null;
  updatedAt: Date;
  username: string;
  verifications: number | null;
};

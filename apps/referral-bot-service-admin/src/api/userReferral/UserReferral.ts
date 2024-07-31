export type UserReferral = {
  createdAt: Date;
  id: string;
  referralUser: string | null;
  referredUser: string | null;
  updatedAt: Date;
};

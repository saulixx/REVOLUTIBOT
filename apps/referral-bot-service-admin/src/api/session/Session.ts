export type Session = {
  createdAt: Date;
  expiration: Date | null;
  id: string;
  token: string | null;
  updatedAt: Date;
};

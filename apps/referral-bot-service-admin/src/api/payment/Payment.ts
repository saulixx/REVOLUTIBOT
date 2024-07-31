export type Payment = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  paymentMethod: string | null;
  updatedAt: Date;
};

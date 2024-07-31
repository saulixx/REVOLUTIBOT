import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CardRequestWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  userId?: IntNullableFilter;
};

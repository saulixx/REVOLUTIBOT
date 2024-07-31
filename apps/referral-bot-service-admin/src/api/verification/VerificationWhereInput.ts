import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VerificationWhereInput = {
  approved?: BooleanNullableFilter;
  comment?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  userId?: IntNullableFilter;
};

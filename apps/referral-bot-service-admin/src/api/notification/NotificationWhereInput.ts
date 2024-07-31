import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  userId?: IntNullableFilter;
};

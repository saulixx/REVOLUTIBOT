import { CardRequestWhereInput } from "./CardRequestWhereInput";
import { CardRequestOrderByInput } from "./CardRequestOrderByInput";

export type CardRequestFindManyArgs = {
  where?: CardRequestWhereInput;
  orderBy?: Array<CardRequestOrderByInput>;
  skip?: number;
  take?: number;
};

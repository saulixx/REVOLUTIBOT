import { MessageTemplateWhereInput } from "./MessageTemplateWhereInput";
import { MessageTemplateOrderByInput } from "./MessageTemplateOrderByInput";

export type MessageTemplateFindManyArgs = {
  where?: MessageTemplateWhereInput;
  orderBy?: Array<MessageTemplateOrderByInput>;
  skip?: number;
  take?: number;
};

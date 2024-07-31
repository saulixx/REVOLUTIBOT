import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};

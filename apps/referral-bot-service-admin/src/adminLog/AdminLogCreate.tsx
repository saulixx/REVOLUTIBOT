import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="details" multiline source="details" />
      </SimpleForm>
    </Create>
  );
};

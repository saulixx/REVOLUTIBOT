import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="details" multiline source="details" />
      </SimpleForm>
    </Edit>
  );
};

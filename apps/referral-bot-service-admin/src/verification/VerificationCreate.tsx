import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const VerificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="approved" source="approved" />
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="filePath" source="filePath" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};

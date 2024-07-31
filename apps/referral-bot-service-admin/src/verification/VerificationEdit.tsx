import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const VerificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="approved" source="approved" />
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="filePath" source="filePath" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};

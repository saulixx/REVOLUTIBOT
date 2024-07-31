import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
} from "react-admin";

export const CardRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
